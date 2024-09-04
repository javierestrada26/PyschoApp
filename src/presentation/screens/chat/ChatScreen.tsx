import { Tab } from '@ui-kitten/components';

import { GiftedChat} from 'react-native-gifted-chat';
import { MyIcon } from '../../components/ui/MyIcon';
import { StyleSheet, View} from 'react-native';
import { useChat } from '../../../hooks/useChat';
import { LoadingIndicator } from '../../components/loading/LoadingIndicator';





export const ChatScreen= () => {
  const { messages, sendMessage, loading  } = useChat();


  return (
    <>
    <View style={styles.container}>
      <View style={{backgroundColor:'#005CAA',height:120,borderRadius:20}}>
        <Tab
          title='Hannah - Asistente Virtual'
          icon={<MyIcon name='person' white/> }
          style={{marginTop:55, gap:5}}
        />
      </View>

      <GiftedChat
        messages={messages}
        onSend={newMessages => sendMessage(newMessages)}
        user={{
          _id: 1
        }}
        inverted={true}
        

      />
      {loading && <LoadingIndicator />}
    </View>
    </>
    
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});
