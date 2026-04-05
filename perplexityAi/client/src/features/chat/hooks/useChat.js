import { disconnectSocket, initializeSocketConnection } from "../services/chat.socket";

export const useChat = ()=>{
  return {
    initializeSocketConnection ,
    disconnectSocket,
  }
}
