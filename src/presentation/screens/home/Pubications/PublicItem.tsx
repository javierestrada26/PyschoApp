import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

export const PublicItem = ({publication}:{publication:any}) => {
    const navigation = useNavigation()
    const getCategoryIcon = () => {
        if (publication.tag === 'Video') {
            return <Icon source="youtube" color="red" size={15} />;
        } else if (publication.tag === 'Podcast') {
            return <Icon source="spotify" color="green" size={15} />;
        } else {
            return null; // O algún icono por defecto si lo prefieres
        }
    };
  return (
    <TouchableOpacity style={{backgroundColor:'white',width:260, marginRight:15, 
        padding:10, borderRadius:15, gap:3}}
        onPress={()=>navigation.navigate('PublicationsDetailsScreen',{
            publication:publication
        })}
        >
        <Image
             source={{uri:publication?.image?.url}}
             style={{width:240, height:130, borderRadius:10}}
        />
        <View>
            <Text variant='titleSmall'>{publication.name}</Text>
            <Text style={{color:'gray', marginTop:5}} variant='labelMedium'>{publication.author}</Text>
            
        </View>
        <View style={{display:'flex', flexDirection:'row', gap:4, alignItems:'center', marginTop:3}}>
            <Text>{getCategoryIcon()}</Text>
            <Text variant='labelMedium'> {publication.tag}</Text>
            
        </View>
    </TouchableOpacity>
  )
}
