import { StyleSheet} from 'react-native';
import { InputToolbar, Composer } from 'react-native-gifted-chat';

export const CustomInputToolbar = (props:any) => {
  return (
    <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={styles.primaryStyle}
    >
        <Composer
            {...props}
            textInputStyle={styles.composer}
            placeholder='Escribe un mensaje...'
        />
    </InputToolbar>
  );
};

const styles = StyleSheet.create({
    inputToolbar: {
        borderTopWidth: 1,
        borderTopColor: '#E4E4E4',
        height: 40,  // Ajustar la altura aquí
    },
    primaryStyle: {
        alignItems: 'center',
    },
    composer: {
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,  // Ajustar la altura del input aquí
    },
});