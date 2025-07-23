import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
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
  Home: undefined;
  SlidesScreen: undefined;
  PublicationsDetailsScreen: undefined;
  PersonalDetailsScreen: undefined;
}



const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    
    screenOptions={{
      headerShown: false,
    }}
    >
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="PublicationsByCategoryScreen" component={PublicationsByCategory} />
        <Stack.Screen name="PublicationsDetailsScreen" component={PublicationsDetails} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetails} />
        <Stack.Screen name='EmergencyScreen' component={EmergencyScreen} />
        <Stack.Screen name='Header' component={Header} />
    </Stack.Navigator>
  )
}
