import { Send } from 'react-native-gifted-chat';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { SendProps } from 'react-native-gifted-chat';

export const CustomSendButton = (props: SendProps<any>) => {
  return (
    <Send {...props}>
      <View style={styles.sendButton}>
        <Text style={styles.sendText}>Enviar</Text>
      </View>
    </Send>
  );
};

const styles = StyleSheet.create({
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#3A86FF',
        borderRadius: 20,
        
    },
    sendText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});