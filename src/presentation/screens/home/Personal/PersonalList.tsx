import { FlatList, View } from "react-native"
import { ActivityIndicator, Text } from "react-native-paper"
import { PersonalItem } from "./PersonalItem"
import { useQuery } from "@tanstack/react-query"
import { getPersonal } from "../../../../actions/personal/getPersonal"


export const PersonalList = ({personal}:{personal:any}) => {

  const {isLoading,data = []} = useQuery({
    queryKey: ['personal'],
    queryFn: () => getPersonal(),
    staleTime: 1000 * 60 * 60
})
  return (
    //incorporar el isLoading
    <>
    {isLoading?(
      <ActivityIndicator/>
    ):(
      <View>
        <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <PersonalItem staff ={item}/>
        )}
        />
      </View>
    )}

    </>
  )
}
