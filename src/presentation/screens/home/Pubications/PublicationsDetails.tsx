import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { PublicationIntro } from '../../../components/ui/PublicationIntro'
import { SourceSection } from '../../../components/ui/SourceSection'

export const PublicationsDetails = () => {
    const {params } = useRoute()
    const {height} = useWindowDimensions()
    const [publication, setPublications] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        console.log(params.publication);
        setPublications(params.publication);
    }, [params])
  return (
    <View style={{flex:1}}>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:35, backgroundColor:'#005CAA', height:120, padding:40, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{marginTop:13}}
                >
                <Icon source='arrow-left' color='white' size={28}/>
            </TouchableOpacity>
            <Text variant='titleLarge' style={{color:'white',marginTop:13, fontWeight:'bold'}}>Detalles de Publicación</Text>
        </View>
        <ScrollView 
            
            showsVerticalScrollIndicator={false}
        >
            {/**Publication Intro */}
            <PublicationIntro publication={publication}/>
            {/**Source seccion  */}
            <SourceSection publication={publication}/>
        </ScrollView>
    </View>
  )
}
