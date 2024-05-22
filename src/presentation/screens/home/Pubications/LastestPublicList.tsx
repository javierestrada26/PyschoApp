import { FlatList, View } from "react-native"

import { PublicItem } from "./PublicItem"


export const LastestPublicList = ({lastestPublic}:{lastestPublic:any}) => {
    
  return (
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
  )
}
