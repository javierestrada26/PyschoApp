import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveThread = async (threadId: string) => {
    await AsyncStorage.setItem('threadId', threadId);
};

export const getThread = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('threadId');
};