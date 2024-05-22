import { useAuth,useClerk } from '@clerk/clerk-expo';
import {  Layout, Text } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper';
import { createThreadUseCase } from '../../../actions/assistant/create-thread.use-case';


export const ProfileScreen = () => {
    //const { signOut } = useClerk();

{   /* const SignOut = ()=>{

        const { isLoaded, signOut } = useAuth(); 
        if(!isLoaded){
            return null
        }
    }*/}

    const handleCreateThread = async () =>{
        try {
            const threadId = await createThreadUseCase()
            console.log('Thread ID:', threadId);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    
    <View style={{marginTop:350, padding:50}}>
        <Button 
            mode="contained"
            onPress={handleCreateThread}
        >Crear thread</Button>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        

    }
})
