import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import hyGraphApi from '../../../config/api/hyGraphApi';
import { PublicationsListItem } from './PublicationsListItem';




export const PublicationsByCategory = () => {

  const navigation = useNavigation()
  const param = useRoute().params as { category: string }

  const [lastestPublications, setlastestPublications] = useState([])
  useEffect(() => {
    console.log('Category',param.category);
    
    param&&getPublicByCategory()
  },[param])

  const getPublicByCategory=( )=>{
    hyGraphApi.getPublicByCategory(param.category)
    .then(resp=>{
      console.log(resp.newLastestPublics);
      setlastestPublications(resp.newLastestPublics)
    })
  }
  {/**const getPublicationsByCategory =  () => {
    hyGraphApi.getPublicationsByCategory(param.category.name)
    .then(resp=>{
      setlastestPublications(resp.latestPublication)
      console.log(resp.latestPublication);
    })
  }*/}
  return (
    <View style={{padding:20, paddingTop:40,}}>
      <TouchableOpacity 
        style={{display:'flex',flexDirection:'row', gap:10,
        alignItems:'center'}}
        onPress={() => navigation.goBack()}
        >
        <Icon source="arrow-left" color='black'size={28} />
        <Text variant='titleLarge'>{param.category}</Text>
      </TouchableOpacity>

      {lastestPublications?.length>0?<FlatList
        data={lastestPublications}
        style={{marginTop:10}}
        renderItem={({item,index})=>(
          <PublicationsListItem publications={item}/>
        )}
      />:
      <Text variant='bodyLarge' style={{textAlign:'center',marginTop:'20%', color:'gray'}}>Publicaciones no disponibles</Text>}
    </View>
  )
}
