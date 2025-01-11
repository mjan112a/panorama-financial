import { Pinecone } from "@pinecone-database/pinecone";

let pinecone: Pinecone | null = null;

export async function initPinecone() {
  if (!process.env.PINECONE_API_KEY) {
    console.warn('Pinecone API key not found in environment variables');
    return null;
  }

  if (!pinecone) {
    try {
      pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY
      });
    } catch (error) {
      console.error('Failed to initialize Pinecone:', error);
      return null;
    }
  }

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
  if (!pinecone) {
    console.warn('Pinecone client not initialized');
    return;
  }

  try {
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
  } catch (error) {
    console.error('Failed to upsert data:', error);
    throw error;
  }
}

async function generateEmbedding(): Promise<number[]> {
  // TODO: Implement embedding generation using AI model
  // For now, return a random 1536-dimensional vector
  return Array(1536).fill(0).map(() => Math.random());
}