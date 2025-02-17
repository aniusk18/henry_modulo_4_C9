import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { model } from '../config/modelConfig.js';

const classificationPrompt = ChatPromptTemplate.fromTemplate(
  `First detect the language (respond only with 'es' or 'en'), then classify if this is news or general. 
   Answer in format: "language:classification"
   Question: {question}`
);


export const classificationChain = RunnableSequence.from([
  classificationPrompt,
  model,
  new StringOutputParser()
]);
