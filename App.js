import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  console.log('안녕하세요');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App;
