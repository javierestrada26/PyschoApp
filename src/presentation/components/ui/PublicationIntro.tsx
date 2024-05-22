import React, { useEffect, useRef, useState } from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'
import { Video,ResizeMode } from 'expo-av'
import { Text } from 'react-native-paper';


export const PublicationIntro = ({publication}: {publication: any}) => {
  

    return publication&&(
        <View style={{marginTop:10, borderRadius:10}}>

            {publication?.chapter?<Video
                style={styles.video}
                source={{uri:publication?.chapter?.video?.url}}
                useNativeControls={true}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />:
            <Image source={{uri:publication?.image?.url}}
                style={{width:'100%', height:220, borderRadius:10}}
            />}
            <View style={{display:'flex', gap:10, marginTop:10, backgroundColor:'white', borderRadius:10, padding:15}}>
                <Text variant='titleLarge'>{publication.name}</Text>
                <Text style={{color:'gray'}}variant='labelMedium'>{publication.author}</Text>
                <View>
                  <Text variant='titleLarge'>Descripción</Text>
                  <Text variant='labelMedium' 
                    numberOfLines={5} 
                    style={{marginTop:10}}
                  >{publication.description}</Text>
                </View>
                
            </View>
      </View>
    )
}

const styles = StyleSheet.create({

    video: {
      width: '100%',
      height: 220,
    },
    controlsContainer: {
      padding: 5,
    },
  });
