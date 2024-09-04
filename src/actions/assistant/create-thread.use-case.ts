import { useState } from "react";
import { assistantApi } from "../../config/api/assistantApi";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const getThreadId = async () =>{
    const [threadId, setThreadId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    try { 
      const resp = await assistantApi.post('/hannah-assistant/create-thread')
      const { id } = resp.data;
      setThreadId(id);
      //console.log('respuesta del id:', resp.data.id);
      await AsyncStorage.setItem('threadId', id);
      //console.log('Thread ID saved to AsyncStorage');
    } catch (error) {
        setError('Error creating thread');
        //console.error('Error creating thread:', error);
    }
  }