
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import hyGraphApi from '../../../../config/api/hyGraphApi'
import { useEffect, useState } from 'react'
import { LastestPublicList } from './LastestPublicList'
import { HomeHeading } from '../../../components/home/HomeHeading'

export const NewLastestPublic = () => {
    const [lastestPublic, setLastestPublic] = useState([])
    

    useEffect(() => {
        getNewLastestPublic()
    },[])
    const getNewLastestPublic = async () => {
        hyGraphApi.getNewLastestPublic().then((resp: unknown) => {
            setLastestPublic(resp?.newLastestPublics);
        })
    }
  return (
    <View style={{marginTop:10}}>
      <HomeHeading
        text="Últimas Publicaciones"
      />
        <LastestPublicList lastestPublic={lastestPublic}/>
    </View>
  )
}
