import { useClerk, useUser } from '@clerk/clerk-expo';
import {Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import {  Icon, Text } from 'react-native-paper';
import { Button } from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker';


export const ProfileScreen = () => {
    
    const { signOut} = useClerk();
    const { user} = useUser();

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.75,
            base64: true,
        });

        if (!result.canceled) {
            const base64 = `data:image/png:base64,${result.assets[0].base64}`;
            user?.setProfileImage({
                file: base64,
            });
        }
    };


  return (
    <View style={{backgroundColor:'#fff',flex:1 }}>
        <View style={{padding:15, paddingTop:50, backgroundColor:'#005CAA', borderBottomLeftRadius:30, borderBottomRightRadius:30,height:120}}>
            <Text style={{color:'white', marginTop:15, textAlign:'center', fontWeight:'bold'}} variant='headlineLarge'>Perfil</Text>

        </View>
            <TouchableOpacity  
                onPress={pickImage}
                style={{alignSelf:'center',marginTop:35}}
            >
                <Image
                    source={{uri: user?.imageUrl}}
                    style={{width: 120, height: 120, borderRadius: 99, }}
                    />
        
            </TouchableOpacity>
            <View style={{alignSelf:'flex-start', padding:15}}>
                <Text style={{color:'grey', marginTop:15, fontWeight:'bold',}} variant='titleLarge'>Nombre</Text>
                <View style={styles.boxsubtittle}>
                    <Text style={{color:'black'}} variant='titleMedium'>{user?.fullName}</Text>
                </View>

                <Text style={{color:'grey', marginTop:15, fontWeight:'bold',}} variant='titleLarge'>Correo Electrónico</Text>
                <View style={styles.boxsubtittle}>
                    <Text style={{color:'black',}} variant='titleMedium'>{user?.primaryEmailAddress?.emailAddress}</Text>
                </View>

                <Text style={{color:'grey', marginTop:15, fontWeight:'bold',}} variant='titleLarge'>Cuenta Creada</Text>
                <View style={styles.boxsubtittle}>
                    <Text style={{color:'black',}} variant='titleMedium'>{user?.createdAt?.toLocaleDateString()}</Text>
                </View>

            </View>



        <View style={styles.boxitem} >
             <Button
                accessoryLeft={
                <Icon
                source={require('../../../assets/signout.png')}
                size={30}
                color='#F3C11C'
                />}
                appearance="ghost"
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    alignSelf:'center'
                }}
                onPress={() => signOut()}
            >
                Cerrar Sesión 
            </Button>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },

    containerButtons:{
     
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
      width: 150, 
      marginVertical: 5,
      
      
    },
    boxtittle:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2.84,
        elevation: 14,
        alignItems: 'center',
        width: 350,
        alignSelf: 'center',
        marginTop:20
        
    },
    boxsubtittle:{
        padding: 10,
        borderRadius: 10,
        marginTop:5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.84,
        elevation: 14,
        width: 385,
        alignSelf: 'center',
        
    },
    boxitem:{
        marginTop:60,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.84,
        elevation: 14,
        alignItems: 'center',
        width: 300,
        alignSelf: 'center',
    },
    webview: {
        flex: 1,
        width: '100%',
      },

})
