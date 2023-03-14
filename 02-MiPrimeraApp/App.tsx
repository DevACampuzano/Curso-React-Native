import React from 'react';
import { SafeAreaView } from 'react-native';
// import BoxObjectScreen from './src/screens/BoxObjectScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScrren from './src/screens/HolaMundoScrren';
import DimensionesScreen from './src/screens/DimensionesScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
      {/* <HolaMundoScrren/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectScreen/> */}
      <DimensionesScreen/>
    </SafeAreaView>
  );
};

export default App;
