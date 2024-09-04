import { Image, Linking, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native'
import { Icon, Text } from 'react-native-paper'
import { Button } from '@ui-kitten/components';


export const PersonalContent = ({staff}: {staff: any}) => {
  const {height,} = useWindowDimensions()
  const whatsapp = () => {
    Linking.openURL(staff.whatsUrl)
  }
  const mail = () => {
    Linking.openURL(staff.mailUrl)
  }
  return (
    <ScrollView 
    style={{marginBottom:height * 0.14, padding:10}}
        showsVerticalScrollIndicator={false}
    >
    <View style={{marginTop:10, padding:15}}>
      <View style={{backgroundColor:'#F3C11C', borderRadius:10}}>
        <Image source={{uri:staff?.image?.url}} style={{width:150,height:170,  borderRadius:10, alignSelf:'center', }}/>
      </View>

      <View style={styles.boxDescription}>
        <Text variant='titleLarge' style={{alignSelf:'center', fontWeight:'bold'}}>{staff.name}</Text>
        <View style={{display:'flex', flexDirection:'row',gap:10,  marginTop:2, left:75}}>
          <Icon source='account-network-outline' color='gray' size={15}/>
          <Text style={{color:'gray'}}variant='labelMedium'>{staff.profession}</Text>

          <View style={{ left:15,display:'flex', flexDirection:'row',gap:10, }}>
            <Icon source='city-variant-outline' color='gray' size={15}/>
            <Text style={{color:'gray'}}variant='labelMedium'>{staff.city}</Text>
          </View>
        </View>

      </View>
      
      <View>

      <View style={styles.boxDescription}>
            <Text variant='titleLarge' style={{fontWeight:'bold'}}>Acerca de mí</Text>
            <Text variant='labelMedium' numberOfLines={5} style={{marginTop:2}}>{staff.description}</Text>
          </View>
      </View>
      
      <View style={styles.subContainer}>
        <Text variant='titleLarge' style={{color:'black', fontWeight:'bold'}}>Contacto</Text>
        <View style={{display:'flex', flexDirection:'column', gap:5}}>
        <Button
            accessoryLeft={
              <Icon
              source={require('../../../../../assets/whatsapp.png')}
              size={25}
            />}
            appearance="ghost"
            style={{
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop:10,
                width:250,
                height:60,
                alignSelf:'center'
            }}
            onPress={whatsapp}
            size="medium"
          >
            Contactar por Whatsapp
          </Button>

          <Button
            accessoryLeft={
              <Icon
              source={require('../../../../../assets/gmail.png')}
              size={25}
            />}
            appearance="ghost"
            style={{
                backgroundColor: '#fff',
                borderRadius: 15,
                marginTop:10,
                width:250,
                height:60,
                alignSelf:'center'
            }}
            onPress={mail}
            size="medium"
          >
            Contactar por Correo
          </Button>

        </View>
      </View>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subContainer:{
    width: '100%',
    height: '31%',
    borderRadius:30,
    
    padding: 15,
  },
  boxDescription:{
    padding:15,
    gap:10, 
    marginTop:20, 
    backgroundColor:'white', 
    borderRadius:10, 
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  }
})

