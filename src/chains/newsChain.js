import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { model } from '../config/modelConfig.js';
import { cnnLoader, cbcLoader } from '../loaders/newsLoaders.js';

export async function setupNewsChain() {
  const cnnDocs = await cnnLoader.load();
  const cbcDocs = await cbcLoader.load();
  const allDocs = [...cnnDocs, ...cbcDocs].filter(doc => doc.pageContent.trim());

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const splits = await splitter.splitDocuments(allDocs);
  
  const newsContext = splits.map(split => split.pageContent).join('\n\n');

  // const newsPrompt = ChatPromptTemplate.fromTemplate(
  //   `Based on these news articles:\n${newsContext}\n\nAnswer this question: {question}`
  // );

  const newsPrompt = ChatPromptTemplate.fromTemplate(
    `Language: {language}
     Based on these news articles:
     ${newsContext}
     
     Answer this question in the same language as the question: {question}`
  );

  return RunnableSequence.from([
    newsPrompt,
    model,
    new StringOutputParser()
  ]);
}
