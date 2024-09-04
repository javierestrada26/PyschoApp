import React from 'react'
import { Image, Linking, TouchableOpacity, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

export const SourceSection = ({publication}: {publication: any}) => {
    const getCategoryIcon = () => {
        if (publication.tag === 'Video') {
            return <Icon source="youtube" color="red" size={50} />;
        } else if (publication.tag === 'Podcast') {
            return <Icon source="spotify" color="green" size={50} />;
        } else if (publication.tag === 'Articulo'){
            return <Icon source="file-document" color="blue" size={50} />;
        }
    };

    const watchVideo = () => {
        Linking.openURL(publication.youtubeUrl)
    }
    const hasYoutubeUrl = publication && publication.youtubeUrl;

  return  publication&& (
    <View style={{ padding:10}}>
        {hasYoutubeUrl&&(
        <>
            <Text variant='titleLarge'style={{fontWeight:'bold',padding:10}}>Enlaces</Text>
            <TouchableOpacity style ={{backgroundColor:'white',
            alignItems:'center', borderRadius:10, width:200, alignSelf:'center'}}
            onPress={watchVideo}
            >
                <Text>{getCategoryIcon()}</Text>

                {publication.tag==='Articulo'?<Text variant='labelMedium'>Articulo</Text>:
                publication.tag==='Podcast'?<Text variant='labelMedium'>Spotify</Text>:
                <Text variant='labelMedium'>Youtube</Text>}
            </TouchableOpacity>
        </>
        )}
    </View>
  )
}
