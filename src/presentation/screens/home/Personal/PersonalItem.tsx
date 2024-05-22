import { useNavigation } from "@react-navigation/native"
import { Image, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-paper"


export const PersonalItem = ({staff}:{staff:any}) => {
  const navigation = useNavigation()
  console.log(staff);
  return (
    <TouchableOpacity
      style={{backgroundColor:'#F5F5F5',width:260, marginRight:15, 
        padding:10, borderRadius:15, gap:3}}
      onPress={()=>navigation.navigate('PersonalDetailsScreen',{
          staff:staff
      })}
    >
        <Image
          source={{uri:staff?.image.url}}
          style={{width:240, height:135, borderRadius:10 }}
          
        />
        <View>
          <Text variant='titleSmall'>{staff.name}</Text>
        </View>

        <View style={{display:'flex', flexDirection:'row', gap:110, alignItems:'center'}}>
        <Text style={{color:'gray', marginTop:5}} variant='labelMedium'>{staff.profession}</Text>
          <Icon  source="arrow-right-thin" color="black" size={25} />
        </View>
    </TouchableOpacity>
  )
}
