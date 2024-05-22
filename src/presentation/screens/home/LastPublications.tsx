import { Layout, Text } from '@ui-kitten/components'
import { LastPublications as LastPublic } from '../../../infraestructure/interfaces/lastpublications.type'
import { useEffect, useState } from 'react'
import hyGraphApi from '../../../config/api/hyGraphApi'
import { HomeHeading } from '../../components/home/HomeHeading'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { LastPublicationsItemSmall } from './LastPublicationsItemSmall'
import { useNavigation } from '@react-navigation/native'


interface LastPublicationsResponse {
    latestPublication?: LastPublic[];
}

export const LastPublications = () => {
    const [publications, setPublications] = useState<LastPublic[]>([])
    const navigation = useNavigation()
    useEffect(()=>{
        getLastPublications()
    },[])

    const getLastPublications = () => {
        hyGraphApi.getLastesPublications().then((resp: unknown) => {
            const publicationsResponse = resp as LastPublicationsResponse;
            console.log("resp from API:", publicationsResponse);
            if (publicationsResponse && publicationsResponse.latestPublication) {
                const publications = publicationsResponse.latestPublication;
                console.log("publications from API:", publications);
                setPublications(publications);
            }
        });
    };
  return (
    <View style={{marginTop:20}}>
        <HomeHeading
            text="Últimas Publicaciones"
        />
        <FlatList
        data={publications}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity
                onPress={()=>navigation.navigate('PublicationsDetailsScreen',{
                    publicationId: item
                
                })} 
            >
                <Layout style={{marginRight:10, }}>
                    <LastPublicationsItemSmall publications={item}/>
                </Layout>
                
            </TouchableOpacity>
        )}
        />

    </View>
  )
}
