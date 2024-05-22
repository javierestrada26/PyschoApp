import React from 'react'
import { Image, Linking, TouchableOpacity, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

export const SourceSection = ({publication}: {publication: any}) => {
    const getCategoryIcon = () => {
        if (publication.tag === 'Video') {
            return <Icon source="youtube" color="red" size={50} />;
        } else if (publication.tag === 'Podcast') {
            return <Icon source="spotify" color="green" size={50} />;
        } else {
            return null; // O algún icono por defecto si lo prefieres
        }
    };

    const watchVideo = () => {
        Linking.openURL(publication.youtubeUrl)
    }
  return  publication&& (
    <View style={{marginTop:20, }}>
        <Text variant='titleLarge'>Enlaces</Text>
        <TouchableOpacity style ={{marginTop:20, backgroundColor:'white',
         alignItems:'center', borderRadius:10, width:100}}
         onPress={watchVideo}
         >
            <Text>{getCategoryIcon()}</Text>
            {publication.tag==='Video'?<Text variant='labelMedium'>Youtube</Text>:
            <Text variant='labelMedium'>Spotify</Text>
            }
            
        </TouchableOpacity>
    </View>
  )
}
