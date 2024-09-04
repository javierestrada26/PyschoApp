import { FlatList, View } from "react-native"

import { PublicItem } from "./PublicItem"
import { useQuery } from "@tanstack/react-query"
import { getNewLastestPublic } from "../../../../actions/publications/getPublications"

export const LastestPublicList = ({lastestPublic}:{lastestPublic:any}) => {

//usar tanstack query para guardar los datos de las ultimas publicaciones
   
  return (
    <>
    <View>
        <FlatList
            data={lastestPublic}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <PublicItem publication ={item}
                
                />
            )}
        />
    </View>
    </>
  )
}
