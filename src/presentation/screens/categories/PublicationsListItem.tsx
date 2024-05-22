import { Image, StyleSheet, View } from "react-native"
import { Icon, Text } from "react-native-paper"
import { colors } from "../../../config/theme/theme"


export const PublicationsListItem = ({publications}: {publications: any}) => {
    const getCategoryIcon = () => {
        if (publications.category.name === 'Videos') {
            return <Icon source="youtube" color="red" size={20} />;
        } else if (publications.category.name === 'Podcast') {
            return <Icon source="spotify" color="green" size={20} />;
        } else {
            return null; // O algún icono por defecto si lo prefieres
        }
    };
    return (
        <View style={styles.constainer}>
            
            <Image source={{uri:publications?.image?.url}}
                style={styles.image}
            />
            <View style={styles.subContainer}>
                <Text variant="bodyLarge" style={{color:'gray'}}>{publications.name}</Text>
                <Text variant="bodySmall">{publications.author}</Text>
                <Text variant="bodySmall">
                    {getCategoryIcon()}
                    {publications.category.name}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    constainer:{
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