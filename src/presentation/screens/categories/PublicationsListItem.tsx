import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-paper"
import { colors } from "../../../config/theme/theme"
import { useNavigation } from "@react-navigation/native"


export const PublicationsListItem = ({publication}: {publication: any}) => {
    const navigation = useNavigation()
    const getCategoryIcon = () => {

        if (publication.category.name === 'Videos') {
            return <Icon source="youtube" color="red" size={25}  />;
        } else if (publication.category.name === 'Podcast') {
            return <Icon source="spotify" color="green" size={20} />;
        } else {
            return null; // O algún icono por defecto si lo prefieres
        }
    };
    return (
        <View style={{padding:10}}>
        <TouchableOpacity 
            style={styles.container}
            onPress={()=>navigation.navigate('PublicationsDetailsScreen' ,{
                publication: publication
            })}
            
        >
            
            <Image source={{uri:publication?.image?.url}}
                style={styles.image}
            />
            <View style={styles.subContainer}>
                <Text variant="bodyLarge" style={{color:'black', fontWeight:'bold', overflow: 'hidden' }} >{publication.name}</Text>
                <Text variant="bodySmall" style={{color:'black'}}>{publication.author}</Text>
                <View>
                    <Text variant="bodySmall" style={{color:'black'}}>
                    <Text style={{padding:20}}>{getCategoryIcon()} </Text>{publication.category.name} </Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white',
        borderRadius:15,
        marginBottom:15,
        display:'flex',
        flexDirection:'row',
        gap:10,

    },
    subContainer:{
        display:'flex',
        gap:8,
        
    },
    image:{
        width:100,
        height:100,
        borderRadius:15,
      
        
    }
})