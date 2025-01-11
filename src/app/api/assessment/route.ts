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
    const validatedData = assessmentSchema.parse(body);
    
    const userId = `user_${Date.now()}`;
    const pinecone = await initPinecone();
    
    await upsertUserData(userId, validatedData);
    
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