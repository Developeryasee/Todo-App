import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, Image, Platform } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from '../splash/splashScreen';
import Login from '../login/loginScreen';
import SignUp from '../SignUp/SignUp';
import BottomNavigationScreen from './BottomNavigationScreen';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { SampleReducer } from '../reducer/SampleReducer';
import { Provider } from "react-redux"
import { AuthContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const NavigatorScreen = () => {
    React.useEffect(() => {
        setTimeout(async () => {
          let userToken = null;
          userToken = await AsyncStorage.getItem('user_token')
          dispatch({ type: 'RETREIVE_TOKEN', token: userToken })
        }, 2000)
    
      }, []);
      const initialLoginState = {
        isLoading: true,
        userToken: null,
      };
      const loginReducer = (prevState, action) => {
        switch (action.type) {
    
          case 'RETREIVE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGIN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'LOGOUT':
            return {
              ...prevState,
              userToken: null,
              isLoading: false,
            };
    
        }
      };
      //*************************************************************************************************//
      const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const authContext = React.useMemo(() => ({
        signIn: async () => {
          let userToken = null;
          userToken = await AsyncStorage.getItem('user_token');
          dispatch({ type: 'LOGIN', token: userToken })
        },
        signOut: async () => {
          console.log("LOGOUT");
          await  AsyncStorage.removeItem('user_token');
          dispatch({ type: 'LOGOUT' })
          
        }
    
      }), []);
    const rootReducer = combineReducers({
        sample: SampleReducer
    })
    let store = createStore(rootReducer);
    
    return (

        <AuthContext.Provider value={authContext}>

            <Provider store={store}>

                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SplashScreen">
                    {loginState.isLoading ? <>
                        <Stack.Screen
                            name='SplashScreen'
                            component={Splashscreen}
                            options={{
                                headerShown: false
                            }}
                        />


            </>
                           :
                           loginState.userToken == null ?
                             <>
                               <Stack.Screen
                            name='login'
                            component={Login}
                            options={{
                                headerShown: false
                            }}
                        />
                        <Stack.Screen
                            name='pin'
                            component={SignUp}
                            options={{
                                headerShown: false
                            }}
                        />
                              </>
                             :
                             <>  
                                <Stack.Screen
                            name='bottom'
                            component={BottomNavigationScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                               </>
             
             }
                        
                        

                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </AuthContext.Provider>

    )

}

export default NavigatorScreen;