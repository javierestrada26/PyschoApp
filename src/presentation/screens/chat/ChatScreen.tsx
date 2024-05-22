import { Layout, Tab } from '@ui-kitten/components';
import React, { useState, useCallback, useEffect, FC } from 'react';

import { GiftedChat} from 'react-native-gifted-chat';
import { MyIcon } from '../../components/ui/MyIcon';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createThreadUseCase } from '../../../actions/assistant/create-thread.use-case';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


export const ChatScreen= () => {
  const [messages, setMessages] = useState<any>([])

  const [threadId, setThreadId] = useState<string >()

  const handleCreateThread = async () => {
    try {
      const threadId = await createThreadUseCase();
      console.log(' Hilo creado:', threadId);
      // Actualizar la UI con threadId (opcional)
    } catch (error) {
      console.error('Error al crear el hilo:', error);
      // Maneja el error de forma adecuada en la interfaz de usuario (por ejemplo, muestra un mensaje de error)
    }
  };

  //obtener el threadId y si no existe crearlo
  
  useEffect(() => {
    const getThreadId = async () => {
      const threadId = await AsyncStorage.getItem('threadId');
      if(threadId){
        setThreadId(threadId)
      }else{
        createThreadUseCase().then((id) => {
          setThreadId(id)
          AsyncStorage.setItem('threadId', id)
        })
      }
    }
    getThreadId()
  }, []);


  handleCreateThread()


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text:  `Hola, soy Hannah, tu asistente virtual. ${threadId}`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043248-avatar-female-portrait-woman_113285.png',
        },
      },
    ]);
  }, [])

  const onSend = useCallback((newMessages: any[] = []) => {
    setMessages((previousMessages:any) =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  return (
    <>
    <View style={{flex:1}}>
      <Tab
        title='Hannah - Asistente Virtual'
        icon={<MyIcon name='chatbox'/> }
        style={{marginTop: 50}}
      />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        
      />
    </View>
    </>
    
  )
}
