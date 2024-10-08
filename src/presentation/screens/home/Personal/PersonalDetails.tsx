
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { PersonalContent } from './personalDetails/PersonalContent'

export const PersonalDetails = () => {
    const {params} = useRoute()
    const navigation = useNavigation()
    const [staff, setStaff] = useState([])

    useEffect(() => {
        setStaff(params.staff);
    }, [params])
  return (
    <View >
        
        <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:35, backgroundColor:'#005CAA', height:120, padding:40, borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
            <TouchableOpacity
             onPress={() => navigation.goBack()}
             style={{marginTop:13}}
            >
                <Icon source='arrow-left' color='white' size={30}/>
            </TouchableOpacity>
            <Text variant='titleLarge' style={{fontWeight:'bold', color:'white', marginTop:13}}>Detalles de Personal</Text>
        </View>
        

        {/**Seccion de detalles */}
        <PersonalContent staff={staff}/>
    </View>

  )
}
