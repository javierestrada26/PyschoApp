import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { ChatScreen } from '../screens/chat/ChatScreen';
import { SlidesScreen } from '../screens/slide/SlidesScreen';
import { PublicationsByCategory } from '../screens/categories/PublicationsByCategory';
import { EmergencyScreen } from '../screens/home/EmergencyScreen';
import { Header } from '../components/ui/Header';
import { PublicationsDetails } from '../screens/home/Pubications/PublicationsDetails';
import { PersonalDetails } from '../screens/home/Personal/PersonalDetails';


export type RootStackParams = {
  LoginScreen: undefined;
  PublicationsByCategoryScreen: undefined;
  EmergencyScreen: undefined;
  Header: undefined;
  HomeScreen: undefined;
  SlidesScreen: undefined;
  PublicationsDetailsScreen: undefined;
  PersonalDetailsScreen: undefined;
}



const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='SlidesScreen'
    screenOptions={{
      headerShown: false,
    }}
    >
        
        <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
        <Stack.Screen name="PublicationsByCategoryScreen" component={PublicationsByCategory} />
        <Stack.Screen name="PublicationsDetailsScreen" component={PublicationsDetails} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetails} />
        <Stack.Screen name='EmergencyScreen' component={EmergencyScreen} />
        <Stack.Screen name='Header' component={Header} />
    </Stack.Navigator>
  )
}
