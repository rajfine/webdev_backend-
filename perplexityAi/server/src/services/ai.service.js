import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai"
import {HumanMessage, SystemMessage, AIMessage} from '@langchain/core/messages'


const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY
})

const mistralModel = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY
})


export const generateResponse = async (messages)=>{
  const formattedMessages = messages
    .filter((msg) => msg?.content && (msg.role === "user" || msg.role === "ai"))
    .map((msg) => {
      if (msg.role === "user") {
        return new HumanMessage(msg.content)
      }

      return new AIMessage(msg.content)
    })

  if (formattedMessages.length === 0) {
    throw new Error("No valid messages found for AI response generation")
  }

  const response = await geminiModel.invoke(formattedMessages)
  return response.text
}

export const generateChatTitle = async (firstMessage)=>{
  
  const response = await mistralModel.invoke([
    new SystemMessage(`
      you are helpful assistant that generate concise and meaningful title , for chat convo.

      user will provide you with first message of the chat convo, and you will generate title for that convo, title should be concise and meaningful.
      it must be less than 2-5 words, and should capture the essence of the conversation.
    `),

    new HumanMessage(`
      generate title for this chat convo:
      ${firstMessage}
    `)
  ])
  return response.text
}

// export const testAi =  () => {
//   const model = getModel()
//   model.invoke("what is the capital of india?")
//     .then((res) => {
//       console.log(res.text)
//     })
// }
