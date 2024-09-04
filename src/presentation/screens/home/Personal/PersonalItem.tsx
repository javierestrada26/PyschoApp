import { useNavigation } from "@react-navigation/native"
import { Image, TouchableOpacity, View } from "react-native"
import { Icon, Text } from "react-native-paper"


export const PersonalItem = ({staff}:{staff:any}) => {
  const navigation = useNavigation()
  console.log(staff);
  return (
    <TouchableOpacity
      style={{backgroundColor:'#F3C11C',width:230,  marginRight:15, 
         borderRadius:15, gap:3, position:'relative'}}
      onPress={()=>navigation.navigate('PersonalDetailsScreen',{
          staff:staff
      })}
    >
        <Image
          source={{uri:staff?.image.url}}
          style={{width:140, height:140,  alignSelf:'center'}}
        />
        <View style={{backgroundColor:'white', width:230,height:80,borderRadius:15}}>
          <Text variant='titleMedium' style={{marginTop:5, padding:5, fontWeight:'bold', left:10}}>{staff.name}</Text>
          <View style={{display:'flex', flexDirection:'row', gap:50, alignItems:'center'}}>
        <Text style={{color:'gray', padding:5, fontWeight:'bold', left:10}} variant='labelLarge'>{staff.profession}</Text>
          <Icon  source="arrow-right-thin" color="#959CA9" size={25} />
        </View>
        </View>

    </TouchableOpacity>
  )
}
