import dotenv from 'dotenv';
import readline from "readline";
import { classificationChain } from './src/chains/classificationChain.js';
import { setupNewsChain } from './src/chains/newsChain.js';
import { generalChain } from './src/chains/generalChain.js';
import { displayWelcomeMessage } from './src/utils/interface.js';

dotenv.config();

async function main() {
  displayWelcomeMessage();
  const newsChain = await setupNewsChain();
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  while (true) {
    const question = await new Promise(resolve => {
      rl.question("\nEnter your question (or 'exit' to quit): ", resolve);
    });

    if (question.toLowerCase() === 'exit') break;

    const questionType = await classificationChain.invoke({ question });
    console.log(`\n📋 Question Category: ${questionType.toUpperCase()}`);
    const response = await (questionType === 'news' ? 
      newsChain.invoke({ question }) : 
      generalChain.invoke({ question }));

      console.log("\n💜 Answer:", response);
  }

  rl.close();
}

main().catch(console.error);
