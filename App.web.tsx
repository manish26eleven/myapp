import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/network/store';
import SwitchScreen from './src/routes/SwitchScreen';
import { PersistGate } from 'redux-persist/integration/react';


const App = () => {
  
  const [count, setCount] = useState(0);
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  {/* <View style={styles.container}>
      <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text>Click me!</Text>
      </TouchableOpacity>

      <Text>You clicked {count} times!</Text>
      
    </View> */}
     <SwitchScreen/>
     </PersistGate>
     </Provider>
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ADBDFF',
    padding: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 40,
  },
});

export default App