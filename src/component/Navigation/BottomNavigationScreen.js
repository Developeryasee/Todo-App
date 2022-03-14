import React, { useEffect, useRef, useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  Icons  from 'react-native-vector-icons/Ionicons';
import AdminDashboard from '../Admin/AdminDashboard';
import SettingDashboard from '../Setting/SettingDashboard';
import { Text } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

const BottomNavigationScreen=()=>{
  
    return(
      <Tab.Navigator 
            initialRouteName="Home"
            activeColor="#000"
            shifting={true}
            barStyle={{ backgroundColor: "#ffffff" }}
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: "#ffffff" }}
            screenOptions={{
            headerShown:false,
        }}
      
        >

      <Tab.Screen
        name="Home"
        component={AdminDashboard}
        options={{
          
            tabBarLabel: <Text style={{fontFamily:"Montserrat-Bold",color:'black'}}>Home</Text>,
            tabBarIcon: ({ color }) => (
                <Icons
                  name='home'
                  size={25}
                  color="#000"
                />
            ),
        }}
    />
    <Tab.Screen
        name="Setting"
        component={SettingDashboard}
        options={{
          
            tabBarLabel: <Text style={{fontFamily:"Montserrat-Bold",color:'black'}}>Setting</Text>,
            tabBarIcon: ({ color }) => (
                <Icons
                  name='settings'
                  size={25}
                  color="#000"
                />
            ),
        }}
    />

        </Tab.Navigator>
    )
    
}

export default BottomNavigationScreen;

