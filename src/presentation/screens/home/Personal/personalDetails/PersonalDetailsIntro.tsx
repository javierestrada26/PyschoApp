
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'

export const PersonalDetailsIntro = ({personal}: {personal: any}) => {
  return (
    <View style={{marginTop:10}}>
      <Image source={{uri:personal?.image?.url}} style={{width:'100%', height:220, borderRadius:10}}/>
      <View style={{display:'flex', gap:10, marginTop:10, backgroundColor:'white', borderRadius:10, padding:15}}>
        <Text variant='titleLarge'>{personal.name}</Text>
        <Text style={{color:'gray'}}variant='labelMedium'>{personal.position}</Text>
        <View>
          <Text variant='titleLarge'>Descripción</Text>
          <Text variant='labelMedium' numberOfLines={5} style={{marginTop:10}}>{personal.description}</Text>
        </View>
      </View>
    </View>
  )
}
