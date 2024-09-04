import OpenAI from "openai";
import { OPENAI_API, ASSISTAN_ID } from "@env";

const openai = new OpenAI({
    apiKey: OPENAI_API
})


export const createThread = async () => {
    const { id } = await openai.beta.threads.create();
    return { id };
};

interface CreateMessageOptions {
    threadId: string;
    question: string;
}

export const createMessage = async (options: CreateMessageOptions) => {
    const { threadId, question } = options;
    const message = await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: question,
    });
    return message;
};

interface CreateRunOptions {
    threadId: string;
    assistantId?: string;
}

export const createRun = async (options: CreateRunOptions) => {
    const { threadId, assistantId = ASSISTAN_ID } = options;
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    });
    return run;
};

interface CheckStatusOptions {
    threadId: string;
    runId: string;
}

export const checkCompleteStatus = async (options: CheckStatusOptions): Promise<any> => {
    const { threadId, runId } = options;
    const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if (runStatus.status === 'completed') {
        return runStatus;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    return await checkCompleteStatus({ threadId, runId });
};

interface GetMessageListOptions {
    threadId: string;
}

export const getMessageList = async (options: GetMessageListOptions) => {
    const { threadId } = options;
    const messageList = await openai.beta.threads.messages.list(threadId);
    const messages = messageList.data.map(message => ({
        role: message.role,
        content: message.content.map(content => (content as any).text.value),
    }));
    return messages;
};