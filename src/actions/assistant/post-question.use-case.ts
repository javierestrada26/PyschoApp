import { assistantApi } from "../../config/api/assistantApi";
import { QuestionResponse } from "../../infraestructure/interfaces/assistant.response";

export const postQuestion = async (threadId: string, question: string ):Promise<QuestionResponse[]> => {
    try {
        const resp = await assistantApi.post('/hannah-assistant/user-question',{
            threadId,
            question
        })
        console.log('Question posted successfully:', resp.data);
        //utilizar una interfaz  para el resp que se llama QuestionResponse
        const replies = resp.data ;
        if (!replies || !Array.isArray(replies)) {
            throw new Error('Invalid response format');
          }
          return replies as QuestionResponse[] ;
        
    } catch (error) {
        console.log('el error es en el llamado api:', error);
        throw new Error('Error posting question');
    }
}