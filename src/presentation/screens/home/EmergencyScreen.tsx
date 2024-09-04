import { Button, Layout, Text } from "@ui-kitten/components"
import { Linking, StyleSheet, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { colors } from "../../../config/theme/theme"
import { MyIcon } from "../../components/ui/MyIcon"
import { Icon } from "react-native-paper"
import LottieView from 'lottie-react-native';
import { useEffect, useState } from "react"
import hyGraphApi from "../../../config/api/hyGraphApi"

export const EmergencyScreen = () => {
  const {height} = useWindowDimensions()
  const [link, setLink] = useState<string>('')

  useEffect(()=>{
    getLink()
  },[])

  const getLink = async () => {
    return hyGraphApi.getLink().then((resp)=>{
      const linkResponse = resp; // Tipo de retorno explícito para resp
      console.log("LINK", linkResponse);
      setLink(linkResponse);
    })
  }

  const zoomLink = () => {
    Linking.openURL('https://utpl.zoom.us/j/9587780756?pwd=NDdLQnRnTWkxd3QxODZkdS9iaE5iUT09')
  }
  return (
    <View style={styles.container}>
      <View style={{
          paddingTop:height * 0.10, 
          marginHorizontal:40,
          
          }}
          >
        {/**Titulo de la pantalla en el centro */}
        <Text style={{color:'black', textAlign:'center'}}category="h1">Necesitas Ayuda</Text>
        
      </View>

      <View>
          <LottieView
            source={require('../../../assets/onboarding/animation/Lottie3.json')}
            autoPlay
            loop
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              
            }}
          />

        </View>

      {/**Parrafos de informacion  */}
      <View style={{marginHorizontal:40, }}>
        <Text style={{fontSize:20, textAlign:'center', color:'#959CA9'}}category="s1">
          Si requieres ayuda inmediata, no dudes en contactarnos
        </Text>
      </View>
      <View style={{
          marginTop:15,
          marginHorizontal:40,
          }}
          >
        
      </View>

      {/**Frase, ainear al centro */}
      <View style={{
          marginTop:15,
          marginHorizontal:40,
          alignItems:'center',
          }}
          >
          <Text style={{color:'black'}}category="h2">
            Línea de ayuda
          </Text>
      </View>

        {/**Boton de emergencia con imagen y que diga Linea 1 */}
        

        <View >
          <Button
            accessoryLeft={
              <Icon
              source={require('../../../assets/emergency.png')}
              size={30}
            />}
            appearance="outline"
            style={{
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop:40,
                width:300,
                alignSelf:'center',
                
                
            }}
            onPress={zoomLink}
            size="medium"
          >
            Línea de Ayuda 
          </Button>
        </View>

    </View>
  )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    }
})
