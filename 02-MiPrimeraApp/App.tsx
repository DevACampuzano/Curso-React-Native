import React from 'react';
import { SafeAreaView } from 'react-native';
// import FlexScreen from './src/screens/FlexScreen';
// import BoxObjectScreen from './src/screens/BoxObjectScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScrren from './src/screens/HolaMundoScrren';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';
import TareasScreen from './src/screens/TareasScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex:1,}}>
      {/* <HolaMundoScrren/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectScreen/> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <TareasScreen/>
    </SafeAreaView>
  );
};

export default App;
