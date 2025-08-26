/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { enableScreens } from 'react-native-screens';
enableScreens();
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
