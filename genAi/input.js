// This script takes user input from the command line
import readline from 'readline/promises'
import 'dotenv/config'
import { ChatMistralAI } from '@langchain/mistralai'
import { HumanMessage, createAgent, tool } from 'langchain'
import { sendEmail } from './mail.service.js'
import * as z from 'zod'

const emailTool = tool(
  sendEmail,
  {
    name: "emailTool",
    description: "A tool to send emails",
    schema: z.object({
      to: z.string().describe("recipient's email address"),
      subject: z.string().describe("subject of the email"),
      html: z.string().describe("html content of the email"),
      text: z.string().optional().describe("plain text content of the email")
    })
  }
)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// rl.question('Enter your input: ', (answer) => {
//   console.log(`You entered: ${answer}`)
//   rl.close();
// })

const model = new ChatMistralAI({
model: "mistral-small-latest",
temperature: 0
});

const agent = createAgent({
  model: model,
  tools: [ emailTool ]
});

const messages = []

while (true) {
  const userinput = await rl.question('\x1b[36m[You]:\x1b[0m ');
  messages.push(new HumanMessage(userinput))
  const response = await agent.invoke({messages});
  messages.push(response.messages[response.messages.length - 1])
  console.log('\x1b[32m[Mistral]:\x1b[0m ' + response.messages[response.messages.length - 1].content);

  // const flag = await rl.question('want to continue? (y/n): ')
  // if(flag === 'n' || flag === 'N'){
  //   rl.close()
  //   break;
  // }
}