import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ChatScreen } from '../screens/chat/ChatScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { MyIcon } from '../components/ui/MyIcon';
import { Text } from '@ui-kitten/components';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
    
    screenOptions={
        {
            headerShown: false,
        }
    }
    >
        <Tab.Screen name="HomeScreen" component={StackNavigator}
        options={{
            tabBarIcon: () => (
                <MyIcon name='home'/>
            ),
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:13, marginTop:-7}}>Inicio</Text>
            ),
        }} />
        <Tab.Screen name="ChatScreen" component={ChatScreen}
        options={{
            tabBarIcon: () => (
                <MyIcon name='chatbox' />
            ),
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:13, marginTop:-7}}>Chat</Text>
            ),
        
        }}
        
         />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
            tabBarIcon: () => (
                <MyIcon name='person'/>
            ),
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:13, marginTop:-7}}>Perfil</Text>
            ),
        
        }}
         />
  </Tab.Navigator>
  )
}
