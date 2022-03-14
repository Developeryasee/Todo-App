
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AdminModules from './AdminModules';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/Entypo'
import ListView from './ListView';
import { useDispatch, useSelector } from 'react-redux'

const AdminDashboard = ({ navigation }) => {
  const {list}=useSelector((state)=>state.sample);

  return (


    <Stack.Navigator>

      <Stack.Screen
        name='Homescreen'
        component={AdminModules}
        options={{
          title: "Homescreenr", //Set Header Title

          headerLeft: null,
          header:    // Your custom header
            props => <LinearGradient
              
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c12015', '#d64a0c', '#e87002']}
              style={{
                flexDirection: "row",
                height: 60,
                marginTop: Platform.OS == "ios" ? 20 : 0,
                alignItems: 'center',
                justifyContent:'space-between'
                // only for IOS to give StatusBar Space
              }}
            >
              <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#fff', marginLeft: 5, textAlign: 'center', marginLeft: 15 }}>Home</Text>
              <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:20}}>
              <Icon
                name='list'
                size={25}
                color='#fff'
                onPress={()=>{
                  navigation.navigate('List')
                }}
              />
              {
                list.length!=0?<>
                  <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 14, color: '#fff', textAlign: 'center',top:5}}>{list.length}</Text>

                </>:null
              }
              </View>
             
            </LinearGradient>,
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold' //Set Header text style
          },
        }}
      >

      </Stack.Screen>
      <Stack.Screen
        name='List'
        component={ListView}
        options={{
          title: "List", //Set Header Title

          headerLeft: null,
          header:    // Your custom header
            props => <LinearGradient
              
            start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c12015', '#d64a0c', '#e87002']}
              style={{
                flexDirection: "row",
                height: 60,
                marginTop: Platform.OS == "ios" ? 20 : 0,
                alignItems: 'center',
                justifyContent:'space-between'
                // only for IOS to give StatusBar Space
              }}
            >
              <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#fff', marginLeft: 5, textAlign: 'center', marginLeft: 15 }}>To Do List</Text>
              
            </LinearGradient>,
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold' //Set Header text style
          },
        }}
      >

      </Stack.Screen>

    </Stack.Navigator>
  )
}

export default AdminDashboard