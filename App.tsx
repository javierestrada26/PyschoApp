import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {  useColorScheme } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';
import { LoginScreen } from './src/presentation/screens/auth/LoginScreen';
import * as SecureStore from "expo-secure-store";
import { TabNavigator } from './src/presentation/navigation/TabNavigator';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from '@env';


const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const queryClient = new QueryClient()

export default function App() {

  const colorSchema =useColorScheme()
  const theme = colorSchema === 'dark' ? eva.dark : eva.light;
  const backgroundColor = (colorSchema === 'dark')
  ? theme['color-basic-800']
  : theme['color-basic-100'];
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <ClerkProvider 
        tokenCache={tokenCache}
        publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <PaperProvider>
      <ApplicationProvider {...eva} theme={theme}>
        {/**Sign in  */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigator/>
          </NavigationContainer>
          
        </SignedIn>
        {/**SignOut */}
        <SignedOut>
          {/**<SlidesScreen/> */}
          <LoginScreen/>
        </SignedOut>
      </ApplicationProvider>
      </PaperProvider>
      </ClerkProvider>
      </QueryClientProvider>
    </>
  );
}


