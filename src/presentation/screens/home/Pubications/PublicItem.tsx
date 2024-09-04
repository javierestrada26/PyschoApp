import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Icon, Text } from 'react-native-paper'

export const PublicItem = ({publication}:{publication:any}) => {
    const navigation = useNavigation()
    const {height,} = useWindowDimensions()
    const getCategoryIcon = () => {
        if (publication.tag === 'Video') {
            return <Icon source="youtube" color="red" size={15} />;
        } else if (publication.tag === 'Podcast') {
            return <Icon source="spotify" color="green" size={15} />;
        } else if (publication.tag === 'Articulo') {
            return <Icon source="file-document" color="blue" size={15} />;
           
        }
    };
  return (
    <TouchableOpacity 
        onPress={()=>navigation.navigate('PublicationsDetailsScreen',{
            publication:publication
        })}
        style={{marginTop:5}}
        >
        <View>
        <Image
             source={{uri:publication?.image?.url}}
             style={{width:250, height:150, marginRight:15, 
                 gap:3, borderTopLeftRadius:15, borderTopRightRadius:15}}
        />
        <View style={styles.container}>
            <Text variant='titleSmall' numberOfLines={1} style={styles.title}>{publication.name} </Text>
            <Text style={styles.author} variant='labelMedium'>{publication.author}</Text>
            <View style={styles.tagContainer}>
                <Text>{getCategoryIcon()}</Text>
                <Text style={styles.tag} variant='labelMedium' numberOfLines={1}> {publication.tag}</Text> 
            </View>
        </View>
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        width: 250,
        height: 110,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        // Controlar que no crezca más allá de una línea
        maxWidth: '100%',
        overflow: 'hidden',
    },
    author: {
        color: 'gray',
        marginTop: 5,
        fontSize: 14,
        maxWidth: '100%',
        overflow: 'hidden',
    },
    tagContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4, // Puedes ajustar esto si no se ve como esperas
        alignItems: 'center',
        marginTop: 3,
    },
    tag: {
        fontSize: 14,
        maxWidth: '100%',
        overflow: 'hidden',
    }, 
})
