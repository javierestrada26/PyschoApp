
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
    <View style={{padding:20,marginTop:40}}>
        <View style={{display:'flex', flexDirection:'row',alignItems:'center',gap:60}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon source='arrow-left' color='black' size={28}/>
            </TouchableOpacity>
            <Text variant='titleLarge'>Detalles de Personal</Text>
        </View>

        {/**Seccion de detalles */}
        <PersonalContent staff={staff}/>
    </View>

  )
}
