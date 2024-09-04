import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import { Icon} from 'react-native-paper'
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
      setlastestPublications(resp?.newLastestPublics)
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
    <View style={{flex:1}} >
      <View style={{display:'flex',flexDirection:'row', gap:35,
        alignItems:'center',backgroundColor:'#005CAA', height:120, padding:40, borderBottomLeftRadius:30, borderBottomRightRadius:30 }}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{marginTop:13}}
          >
          <Icon source="arrow-left" color='white'size={28}  />
        </TouchableOpacity>
        <Text style={{fontWeight:'bold', fontSize:25, color:'white',marginTop:13}}>Listado de {param.category}</Text>
      </View>

      {lastestPublications?.length>0?<FlatList
        data={lastestPublications}
        style={{marginTop:10}}
        renderItem={({item,index})=>(
          <PublicationsListItem publication={item}/>
        )}
      />:
      <Text variant='bodyLarge' style={{textAlign:'center',marginTop:'20%', color:'gray'}}>Publicaciones no disponibles</Text>}
    </View>
  )
}
