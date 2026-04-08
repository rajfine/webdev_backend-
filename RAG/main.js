import { PDFParse } from 'pdf-parse';
import { readFile } from 'node:fs/promises';
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import {MistralAIEmbeddings} from '@langchain/mistralai'
import 'dotenv/config'
import { Pinecone } from '@pinecone-database/pinecone';
import { text } from 'node:stream/consumers';


const databuffer = await readFile('story.pdf');
const parser = new PDFParse({ data: databuffer });
const data = await parser.getText();
// console.log(result.text);


const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 620, 
  chunkOverlap: 0,
})
const chunks = await splitter.splitText(data.text)
// console.log(texts)
// console.log(texts.length)


const embeddings = new MistralAIEmbeddings({
  model: 'mistral-embed'
})
const docs = await Promise.all(chunks.map(async (chunk)=>{
  const embedding = await embeddings.embedQuery(chunk)
  return {
    text: chunk,
    embedding
  }
})) 


const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
})
const index = pc.index("rag")

// const result = await index.upsert({
//   records: docs.map((doc,i)=>({
//     id: `doc-${i}`,
//     values: doc.embedding,
//     metadata:{
//       text: doc.text
//     }
//   }))
// })
// console.log(result)



const query = "tell me about farmer"
const queryEmbedding = await embeddings.embedQuery(query)

const results = await index.query({
  topK: 2,
  vector: queryEmbedding,
  includeMetadata: true,
})

console.log(JSON.stringify(results))


