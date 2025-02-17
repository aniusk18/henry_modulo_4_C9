import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { model } from '../config/modelConfig.js';

const classificationPrompt = ChatPromptTemplate.fromTemplate(
  `Classify if this is a news-related or general question. Answer only with "news" or "general":\n{question}`
);

export const classificationChain = RunnableSequence.from([
  classificationPrompt,
  model,
  new StringOutputParser()
]);
