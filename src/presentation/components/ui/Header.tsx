import { Avatar, Input, Layout, Text } from "@ui-kitten/components"
import { Image, Pressable, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native"

import { useUser } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Icon } from "react-native-paper";
import LottieView from 'lottie-react-native';

//StatusBar.setBarStyle('light-content');

export const Header = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const navigation = useNavigation()
    const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinutes();

    if (hours >= 5 && hours < 12) {
        setGreeting('Buenos Días');
      } else if (hours === 12 && minute === 0) {
        setGreeting('Buenos Días');
      } else if (hours >= 12 && hours < 18) {
        setGreeting('Buenas Tardes');
      } else {
        setGreeting('Buenas Noches');
      }
  }, [])
  

  return (
    <View style={styles.container}>
        {/**Profile Section */}
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ProfileScreen' as never)}
                >
                <Image
                    source={{uri: user?.imageUrl}}
                    style={styles.avatar}
                />
                </TouchableOpacity>
                <View >
                    <Text style={{ color: 'white', marginTop:5 , marginLeft:5}} category="s1">Hola, {user?.firstName ?? ''} </Text>
                    <Text style={{ color: 'white', marginLeft:5, marginTop:5}} category="h5">{greeting}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('EmergencyScreen' as never)} 
                style={{right:15}} 
            >
                  <Icon
                    source={require('../../../assets/emergency.png')}
                    size={40}
                  />
            </TouchableOpacity>
        </View>


    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        padding: 15,
        paddingTop: 50,
        backgroundColor:'#005CAA',
        borderBottomWidth: 1,
        borderBottomColor: '#005CAA',
        height: 120,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
        
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
       
        
    },

    avatar:{
        width: 45,
        height: 45,
        borderRadius: 99,
        left: 20,
    },

})
