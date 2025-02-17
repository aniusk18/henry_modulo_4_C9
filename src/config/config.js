import dotenv from 'dotenv';

dotenv.config();

const config = {
  openAiApiKey: process.env.OPENAI_API_KEY,
  model: process.env.MODEL || 'gpt-3.5-turbo',
  temperature: parseFloat(process.env.TEMPERATURE) || 0.7
};

export default config;
