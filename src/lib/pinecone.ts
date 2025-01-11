import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

export async function initPinecone() {
  return pinecone;
}

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  healthStatus: string;
  annualIncome: string;
  savings: string;
  investments: string;
  homeCare: string;
  assistedLiving: string;
  nursingHome: string;
}

export async function upsertUserData(userId: string, data: UserData) {
  const index = pinecone.Index("user-assessments");
  
  const vector = await generateEmbedding();
  
  await index.upsert([{
    id: userId,
    values: vector,
    metadata: {
      timestamp: new Date().toISOString(),
      ...data
    }
  }]);
}

async function generateEmbedding(): Promise<number[]> {
  // TODO: Implement embedding generation using AI model
  // For now, return a random 1536-dimensional vector
  return Array(1536).fill(0).map(() => Math.random());
}