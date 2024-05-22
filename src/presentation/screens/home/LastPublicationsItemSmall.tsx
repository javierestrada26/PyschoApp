import { Layout, Text } from '@ui-kitten/components'
import { LastPublications } from '../../../infraestructure/interfaces/lastpublications.type'
import { Image, StyleSheet } from 'react-native'
import { colors } from '../../../config/theme/theme'



 interface Props{
    publications?: any
}

export const LastPublicationsItemSmall = ({publications}:Props) => {
  return (
    <Layout style={styles.container}>
        <Image
            source={{uri:publications?.images[0]?.url}}
            style={styles.image}
        />
        <Layout style={styles.infoContainer}>
            <Text category='s1'>{publications?.name}</Text>
            <Text category='p2'>{publications?.about}</Text>
            <Text category='c1' style={{
                color:colors.primary,
                marginTop:5,
                alignSelf:'flex-start',
                paddingHorizontal:5,
            }}>{publications?.category.name}</Text>
        </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:colors.background,
        borderRadius:10,
        alignItems:'center',
    },
    infoContainer:{
        padding:7,
        display:'flex',
        
        gap:3
    },
    image:{
        width:160,
        height:100,
        borderRadius:10
    }
})
