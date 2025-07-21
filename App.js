


import {
  Platform,
  
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SwitchScreen from './src/routes/SwitchScreen';
import store, { persistor } from './src/network/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import { COLORS } from './src/constants/colors/color';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
   <>
      
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toast />
          <SwitchScreen />
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:
      Platform.OS === 'ios' ? '#fffff' : '#fffff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    // flex: 1,
    backgroundColor: '#ccc',
  },
});

export default App;
