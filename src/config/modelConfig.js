import { ChatGroq } from "@langchain/groq";
import dotenv from 'dotenv';

dotenv.config();
export const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  temperature: 0.1,
  modelName: "mixtral-8x7b-32768",
});
