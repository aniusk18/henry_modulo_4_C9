process.removeAllListeners('warning');
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
      rl.question("\nIngrese su pregunta: (o 'exit' para cerrar el programa): ", resolve);
    });

    if (question.toLowerCase() === 'exit') break;

    const questionType = await classificationChain.invoke({ question });
    const [language, classification] = questionType.split(':');
    console.log(`\n📋 ${language === 'es' ? 'Categoría de Pregunta:' : 'Question Category'} ${classification.toUpperCase()}`);
    const response = await (questionType === 'news' ? 
      newsChain.invoke({ question, language }) : 
      generalChain.invoke({ question, language }));

      console.log(`\n💜 ${language === 'es' ? 'Respuesta:' : 'Answer'} :`, response);
  }

  rl.close();
}

main().catch(console.error);
