import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Colors from './src/colors/Colors';

//Screens
import VoiceRecognition from './src/screens/VoiceRecognition';

const AuthContext = React.createContext();
const Stack = createStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: {
          fontWeight: '900',
          fontSize: 18,
          left: -20,
        },
      }}
      initialRouteName="VoiceRecognition">
      <>
        <Stack.Screen
          name="VoiceRecognition"
          component={VoiceRecognition}
          options={{headerShown: false}}
        />
      </>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <AuthContext.Provider>
        <NavigationContainer>
          <StackScreens />
        </NavigationContainer>
      </AuthContext.Provider>
    </SafeAreaView>
  );
};

export default App;
