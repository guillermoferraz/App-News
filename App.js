import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//redux
import { Provider } from 'react-redux';
import store from './src/data'


//components
import Home from './src/components/Home';
import Welcome from './src/components/Welcome';
import styles from './styles'
//styles
import { Text,View, Touchable ,TouchableOpacity } from 'react-native';

//navigation
const Stack = createNativeStackNavigator()

const App = () => {

  const classes = styles

  return (
   <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        {/* WELCOME */}
        <Stack.Screen
          name="Delivery News" component={Welcome}
          options={({navigation}) => ({
          headerRight: () => (
             <TouchableOpacity>
               <Text style={classes.textNextHome}
                 onPress={()=> navigation.navigate("Home")}
                >{'Ingresar'}
                </Text>
              </TouchableOpacity>
            ),
            headerStyle:{
              backgroundColor:"rgb(72,61,139)",
            },
            headerTintColor:"rgb(240,248,255)"
          })}
        />
        {/* END WELCOME */}
        {/* HOME */}
        <Stack.Screen
          name="Home" component={Home} 
          options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity>
             
            </TouchableOpacity>
          ),
          headerStyle:{
            backgroundColor:"rgb(72,61,139)",
          },
          headerTintColor:"rgb(240,248,255)"
        })}
      />
      {/* END HOME */}
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  )
}
export default App
