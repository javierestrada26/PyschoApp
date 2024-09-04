import { Button} from "@ui-kitten/components"
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser"
import { useCallback } from "react"
import { useOAuth } from "@clerk/clerk-expo"
import LottieView from 'lottie-react-native';
import { Icon } from "react-native-paper";


WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {

  const {height} = useWindowDimensions()

  useWarmUpBrowser();


  //inicio de sesion con google
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    
  const  onPress =  useCallback(async () => {
    try {
      const { createdSessionId, setActive } =
       ( await startOAuthFlow()) ?? {};
 
      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  },[])


  return (
    <View style={{flex:1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
      <View style={{backgroundColor:'#fff', height:height * 0.27, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
        <Image
          source={require('../../../assets/cerebro2.png')}
          style={{width: 100, height: 100, alignSelf: 'center', marginTop: height * 0.04, tintColor:'black'}}
        />
          <Text style={{fontSize:27, textAlign:'center', color:'black', fontWeight:'bold'}}>
            PsychoApp
          </Text>
      </View>
        <View>
          <LottieView
            source={require('../../../assets/onboarding/animation/Lottie1.json')}
            autoPlay
            loop
            style={{
              width: 320,
              height: 320,
              alignSelf: "center",
              
            }}
          />

        </View>
             
        <View style={styles.subContainer}>
          <Text style={{fontSize:27, textAlign:'center', color:'white', marginTop:15}}>
            Un refugio para tu paz mental
          </Text>
          
          <Text style={{ fontSize:17, textAlign:'center', marginTop:20, color:'white'}}> Acceso a Recursos y Asistencia Virtual </Text>
          <Button
            accessoryLeft={
              <Icon
              source={require('../../../assets/google.png')}
              size={20}
            />}
            appearance="ghost"
            style={{
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop:30
            }}
            onPress={onPress}
            size="large"
          >
            Iniciar con Google
          </Button>

        </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    width: '100%',
    height: '70%',
    marginTop: 20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'#005CAA',
    padding: 20,
  }
})
