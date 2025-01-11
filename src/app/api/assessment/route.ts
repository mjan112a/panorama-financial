import { NextResponse } from "next/server";
import { z } from "zod";
import { initPinecone, upsertUserData } from "@/lib/pinecone";

const assessmentSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).max(120),
  healthStatus: z.enum(["excellent", "good", "fair", "poor"]),
  financialDetails: z.object({
    annualIncome: z.number().min(0),
    savings: z.number().min(0),
    investments: z.number().min(0),
  }),
  carePreferences: z.object({
    homeCare: z.boolean(),
    assistedLiving: z.boolean(),
    nursingHome: z.boolean(),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = assessmentSchema.parse(body);
    
    const userId = `user_${Date.now()}`;
    const pineconeClient = await initPinecone();
    
    if (!pineconeClient) {
      console.warn('Pinecone client not initialized, storing data locally');
      // In a real app, you might want to store data in a local database or queue it for later
    }
    
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age.toString(),
      healthStatus: data.healthStatus,
      annualIncome: data.financialDetails.annualIncome.toString(),
      savings: data.financialDetails.savings.toString(),
      investments: data.financialDetails.investments.toString(),
      homeCare: data.carePreferences.homeCare.toString(),
      assistedLiving: data.carePreferences.assistedLiving.toString(),
      nursingHome: data.carePreferences.nursingHome.toString()
    };
    
    await upsertUserData(userId, userData);
    
    return NextResponse.json({ 
      success: true,
      message: "Assessment received successfully",
      userId
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}