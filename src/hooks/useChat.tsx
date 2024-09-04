import { useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { getThread, saveThread } from '../storage/storage';
import { checkCompleteStatus, createMessage, createRun, createThread, getMessageList } from '../services/openAI.service';



export const useChat = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [threadId, setThreadId] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const initializeThread = async () => {
            const storedThreadId = await getThread();
            if (storedThreadId) {
                setThreadId(storedThreadId);
                const existingMessages = await getMessageList({ threadId: storedThreadId });
                setMessages(formatMessages(existingMessages));
            } else {
                const newThread = await createThread();
                setThreadId(newThread.id);
                await saveThread(newThread.id);
            }
        };
        initializeThread();
    }, []);

    const formatMessages = (messages:any) => {
        return messages.map((msg:any, index:any) => ({
            _id: index,
            text: msg.content.join(' '),
            createdAt: new Date(),
            user: {
                _id: msg.role === 'user' ? 1 : 2,
                name: msg.role === 'user' ? 'User' : 'Assistant',
            },
        }));
    };

    const sendMessage = async (newMessages: IMessage[] = []) => {
        if (!threadId) return;

        const question = newMessages[0].text;

        // Añadir el nuevo mensaje del usuario a la lista de mensajes
        setMessages(prev => GiftedChat.append(prev, newMessages));

        // Crear el mensaje en la API de OpenAI y obtener la respuesta del asistente
        const message = await createMessage({ threadId, question });

        // Indicar que se está cargando
        setLoading(true);

        // Crear una "ejecución" en OpenAI para obtener la respuesta del asistente
        const run = await  createRun({ threadId });

        // Chequear el estado de la respuesta hasta que esté completa
        await checkCompleteStatus({ threadId, runId: run.id });
        
        // Obtener la lista actualizada de mensajes
        const updatedMessages = await getMessageList({ threadId });

        // Actualizar el estado de los mensajes
        setMessages(formatMessages(updatedMessages));
        
        // Indicar que ya no se está cargando
        setLoading(false);
    };

    return {
        messages,
        sendMessage,
        loading,
    };
};