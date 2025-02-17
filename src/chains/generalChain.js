import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { model } from '../config/modelConfig.js';

const generalPrompt = ChatPromptTemplate.fromTemplate(
  `Answer this general question: {question}`
);

export const generalChain = RunnableSequence.from([
  generalPrompt,
  model,
  new StringOutputParser()
]);
