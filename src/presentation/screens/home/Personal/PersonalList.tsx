import { FlatList, View } from "react-native"
import { Text } from "react-native-paper"
import { PersonalItem } from "./PersonalItem"


export const PersonalList = ({personal}:{personal:any}) => {
  return (
    <View>
        <FlatList
        data={personal}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <PersonalItem staff ={item}/>
        )}
        />
    </View>
  )
}
