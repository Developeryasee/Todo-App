
import React, { useEffect, useState } from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import SettingModule from './SettingModule';
const Stack = createStackNavigator();

const SettingDashboard=({navigation})=>{

    return(
        // <View style={{flex:1,backgroundColor:'#fff'}}>

        // </View>

            <Stack.Navigator>
                        
                        <Stack.Screen
                            name='SETTINGS'
                            component={SettingModule}
                             options={{
          title: "Home", //Set Header Title

          headerLeft: null,

        //   headerStyle: {
        //     backgroundColor: "#C9252B", //Set Header color
          
        //   },
        header:    // Your custom header
        props =><LinearGradient
              
        start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c12015', '#d64a0c', '#e87002']}
          style={{
            flexDirection: "row",
            height: 60,
            marginTop: Platform.OS == "ios" ? 20 : 0,
            alignItems: 'center',
            // only for IOS to give StatusBar Space
          }}
        >
              <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#fff', marginLeft: 5, textAlign: 'center', marginLeft: 15 }}>Settings</Text>
             
        </LinearGradient>,
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontFamily:'Montserrat-Bold' //Set Header text style
          },
        }}
                        >
                            
                        </Stack.Screen>
                
            </Stack.Navigator>
    )
}

export default SettingDashboard