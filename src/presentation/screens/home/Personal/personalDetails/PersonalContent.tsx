import { Image, StyleSheet, View } from 'react-native'
import { Button, Icon, Text } from 'react-native-paper'
import { colors } from '../../../../../config/theme/theme';


export const PersonalContent = ({staff}: {staff: any}) => {

  return (
    <View style={{marginTop:10}}>
      <Image source={{uri:staff?.image?.url}} style={{width:'100%', height:220, borderRadius:10, marginTop:5}}/>

      <View style={{display:'flex', gap:10, marginTop:10, backgroundColor:'white', borderRadius:10, padding:15}}>
        <Text variant='titleLarge'>{staff.name}</Text>
        <View style={{display:'flex', flexDirection:'row', gap:5, marginTop:2}}>
          <Icon source='account-network-outline' color='gray' size={15}/>
          <Text style={{color:'gray'}}variant='labelMedium'>{staff.profession}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', gap:5}}>
          <Icon source='city-variant-outline' color='gray' size={15}/>
          <Text style={{color:'gray'}}variant='labelMedium'>{staff.city}</Text>
        </View>

          <View>
            <Text variant='titleLarge'>Acerca de mí</Text>
            <Text variant='labelMedium' numberOfLines={5} style={{marginTop:10}}>{staff.description}</Text>
          </View>
      </View>
      <View>
        <Text variant='titleLarge' style={{marginTop:20}}>Contacto</Text>
        <View style={{display:'flex', flexDirection:'row', gap:75, marginTop:20}}>
        
        <Button  icon="whatsapp" mode="contained-tonal"  onPress={() => console.log('Pressed')}>
          Vía WhatsApp
        </Button>
        <Button  icon="email-outline" mode="contained-tonal"  onPress={() => console.log('Pressed')}>
          Vía Correo
        </Button>
        </View>
      </View>

    </View>
  )
}

