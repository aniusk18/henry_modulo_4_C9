import { RecursiveUrlLoader } from "@langchain/community/document_loaders/web/recursive_url";
import { compile } from "html-to-text";

const compiledConvert = compile({ wordwrap: 130 });

export const cnnLoader = new RecursiveUrlLoader("https://cnnespanol.cnn.com/lite/", {
  extractor: compiledConvert,
  maxDepth: 2,
  excludeDirs: ["/lite/api/"],
});

export const cbcLoader = new RecursiveUrlLoader("https://www.cbc.ca/lite/news?sort=latest", {
  extractor: compiledConvert,
  maxDepth: 2,
  excludeDirs: ["/lite/api/"],
});
