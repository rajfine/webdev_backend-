import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const getModel = () => {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is missing")
  }

  return new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GOOGLE_API_KEY
  })
}

export const testAi =  () => {
  const model = getModel()
  model.invoke("what is the capital of india?")
    .then((res) => {
      console.log(res.text)
    })
}
