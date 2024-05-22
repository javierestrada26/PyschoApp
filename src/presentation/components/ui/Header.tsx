import { Avatar, Input, Layout, Text } from "@ui-kitten/components"
import { Pressable, StatusBar, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from '../../../config/theme/theme';
import { MyIcon } from "./MyIcon";
import { useUser } from "@clerk/clerk-expo";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";

//StatusBar.setBarStyle('light-content');

export const Header = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const navigation = useNavigation()

    //metodo para navegar a la pantalla de emergencia

  return (
    <Layout style={styles.container}>
        {/**Profile Section */}
        <Layout style={styles.profileMainContainer}>
            <Layout style={styles.profileContainer}>
                <Avatar
                    source={require('../../../assets/avatar.png')}
                    style={styles.avatar}
                />
                <Layout style={{ backgroundColor: colors.primary }}>
                    <Text style={{ color: 'white' }} category="h6">Bienvenido</Text>
                    <Text style={{ color: 'white', marginTop:5 }} category="s2">{user?.firstName ?? ''} {user?.lastName ?? ''}</Text>
                </Layout>
            </Layout>
            <TouchableOpacity
                onPress={() => navigation.navigate('EmergencyScreen')}  
            >
                <MyIcon name="help-buoy-sharp" white size={27}/>
            </TouchableOpacity>
        </Layout>

        {/**Bar Section */}
        <Layout style={styles.searchBarContainer}>
            <Input
                placeholder="Buscar"
                autoCapitalize="none"
                style={styles.input} 
                accessoryLeft={() => <MyIcon name="search" size={20}/>}
                
            />
        </Layout>
    </Layout>
  )
}


const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingTop: 50,
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileMainContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        gap: 25,
    },
    avatar:{
        width: 45,
        height: 45,
        borderRadius: 99,
        left: 20,
    },
    searchBarContainer:{
        marginTop: 20,
        backgroundColor:colors.primary,

    },
    input:{
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '85%',
    }
})
