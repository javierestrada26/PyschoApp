import { Button, Layout, Text } from "@ui-kitten/components"
import { StyleSheet, useWindowDimensions } from "react-native"
import { colors } from "../../../config/theme/theme"
import { MyIcon } from "../../components/ui/MyIcon"

export const EmergencyScreen = () => {
  const {height} = useWindowDimensions()
  return (
    <Layout style={styles.container}>
      <Layout style={{
          paddingTop:height * 0.10, 
          marginHorizontal:40,
          backgroundColor:colors.primary,
          }}
          >
        <Text style={{color:'white'}}category="h1">Necesitas Ayuda?</Text>
      </Layout>
      {/**Parrafos de informacion  */}
      <Layout style={{marginTop:50,marginHorizontal:40, backgroundColor:colors.primary}}>
        <Text style={{color:'white',textAlign:'center'}}category="h6">
          Si te encuentras en una situacion de emergencia, no dudes en llamar a los numeros de emergencia
          de tu localidad.
        </Text>
      </Layout>
        
      <Layout style={{
          marginTop:50,
          marginHorizontal:40,
          backgroundColor:colors.primary,
          }}
          >
        <Text style={{color:'white', textAlign:'center'}}category="h4">Recuerda, no estás solo</Text>
      </Layout>

      {/**Frase, ainear al centro */}
      <Layout style={{
          marginTop:50,
          marginHorizontal:40,
          backgroundColor:colors.primary,
          }}
          >
        <Text style={{color:'#FFD233'}}category="h2">
          Líneas de ayuda
        </Text>
        </Layout>

        {/**Boton de emergencia con imagen*/}
        <Layout style={{backgroundColor:colors.primary,padding:50}}>
        <Button
           accessoryLeft={<MyIcon name="call" white/>}
           style={{
              backgroundColor: '#DB4437',
              borderColor: '#DB4437',
              borderRadius: 15,
              justifyContent:'flex-start',
           }}
          >
            Línea 1 
          </Button>
        </Layout>

    </Layout>
  )
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.primary
    }
})
