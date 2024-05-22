import { Button, Layout, Text,} from "@ui-kitten/components"
import { Image, ScrollView, useWindowDimensions } from "react-native"
import { MyIcon } from "../../components/ui/MyIcon"
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser"
import { useCallback } from "react"
import { useOAuth } from "@clerk/clerk-expo"

//interface Props extends StackScreenProps<RootStackParams,'LoginScreen'>{}
WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {

  const {height} = useWindowDimensions()

  useWarmUpBrowser();

  /*const onLogin = () => {
    //navegar a Homescreen
    const {navigate} = navigation
    navigate('HomeScreen')

  }*/

  //inicio de sesion con google
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  
  const  onPress =  useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
       ( await startOAuthFlow()) ?? {};
 
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  },[])


  return (
    <Layout style={{flex:1}}>
      <ScrollView
        style={{marginHorizontal:40}}
        showsVerticalScrollIndicator={false}
      >
        <Layout>
          <Image
            source={require('../../../assets/loginapp.png')}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              marginTop: height * 0.20,
            }}
          />
        </Layout>
        
        <Layout style={{paddingTop:height * 0.10}}>
          <Text category="h2">Iniciar Sesión</Text>
        </Layout>
        
      
        <Layout style={{marginTop:30}}>


          <Button
           accessoryLeft={<MyIcon name="logo-google" white/>}
           style={{
              backgroundColor: '#DB4437',
              borderColor: '#DB4437',
              borderRadius: 15,
            
           }}
           onPress={onPress}
          >
            Iniciar con Google
          </Button>

          <Layout style={{height:15}}/>

          <Button
           accessoryLeft={<MyIcon name="mail" white/>}
           style={{

              borderRadius: 15,
            
           }}
           //onPress={onPress}
          >
            Iniciar con Correo
          </Button>

          <Layout style={{height:50}}>
          <Layout style={{
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"flex-end",
          height:50
        }}>
          <Text >¿No tienes cuenta?</Text>
          <Text
          status="primary"
          category="s1"
          onPress={() => console.log('Register')}
          >
             Registrate
          </Text>
        </Layout>
            
          </Layout>

        </Layout>

      </ScrollView>
    </Layout>
  )
}
