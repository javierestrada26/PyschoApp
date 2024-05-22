import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { PublicationIntro } from '../../../components/ui/PublicationIntro'
import { SourceSection } from '../../../components/ui/SourceSection'

export const PublicationsDetails = () => {
    const {params} = useRoute()
    const [publication, setPublications] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        console.log(params.publication);
        setPublications(params.publication);
    }, [params])
  return (
    <View style={{padding:20,marginTop:40}}>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:50}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon source='arrow-left' color='black' size={28}/>
            </TouchableOpacity>
            <Text variant='titleLarge'>Detalles de Publicación</Text>
        </View>
        {/**Publication Intro */}
        <PublicationIntro publication={publication}/>
        {/**Source seccion  */}
        <SourceSection publication={publication}/>

    </View>
  )
}
