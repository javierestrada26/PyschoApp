
import { Image, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'
import { Video,ResizeMode } from 'expo-av'
import { Icon, Text } from 'react-native-paper';


export const PublicationIntro = ({publication}: {publication: any}) => {
  
  const imageStyle = publication?.tag === 'Podcast' ? styles.podcastImage : styles.articleImage;


    return publication&&(
        <View style={{borderRadius:10, padding:10}}>
            <Text variant='titleLarge' style={{textAlign:'center', marginTop:5, fontWeight:'bold'}}>{publication.name}</Text>

            <Text variant='titleLarge' style={{padding:10, fontWeight:'bold'}}>Autor</Text>
              <View style={{padding:10, display:'flex', flexDirection:'row', gap:5}}>
                <Icon source='account' color='gray' size={25}/>
                <Text style={{color:'gray'}}variant='titleMedium'>{publication.author}</Text>
              </View>

            <Text variant='titleLarge' style={{padding:10, fontWeight:'bold'}}>Descripción</Text>
            <View style={{display:'flex', gap:10, backgroundColor:'white', borderRadius:10, padding:10}}>                
                <Text variant='labelMedium' 
                    numberOfLines={5} 
                    style={{}}
                  >
                    {publication.description}
                </Text>
            </View>

            {publication?.chapter?<Video
                style={styles.video}
                source={{uri:publication?.chapter?.video?.url}}
                useNativeControls={true}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />:
            <Image source={{uri:publication?.image?.url}}
                style={[styles.baseImage, imageStyle]}
                resizeMode='cover'
            />}

            {/**poner un condicional para ver si hay información en content muestre la sección, caso contrario no la muestre */}
            {publication.content&&<View style={{marginTop:10}}>
                <Text variant='titleLarge' style={{padding:10}}>Contenido</Text>
                <View style={{display:'flex', gap:10, backgroundColor:'white', borderRadius:10, padding:10}}>
                    <Text variant='labelMedium' 
                        numberOfLines={70} 
                        style={{}}
                    >
                        {publication.content}
                    </Text>
                </View>
            </View>}
         
      </View>
    )
}

const styles = StyleSheet.create({
  
    video: {
      width: '100%',
      height: 250,
      marginTop: 10,
    },
    baseImage:{
      width: '100%',
      borderRadius: 20,
      marginTop:10
    },
    podcastImage: {
      height: 225,  // Dimensiones más pequeñas para podcasts
  },
  articleImage: {
      height: 510,
      width:350,
      alignSelf:'center'

  },
  });
