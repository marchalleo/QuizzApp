import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator'
import { TeamContext } from './src/context/context';
import { useState } from 'react';


function App() {

  const [team, setTeam] = useState([]);

  return (
    <NavigationContainer>
      <TeamContext.Provider value={{team, setTeam}}>
        <StackNavigator/>
      </TeamContext.Provider>
    </NavigationContainer>
  );
}

export default App;