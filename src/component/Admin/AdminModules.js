//import liraries
import React, { Component,useEffect, useState } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
const AdminModules = ({navigation}) => {
    const {list}=useSelector((state)=>state.sample);
    const [title,settitle]=useState('')
    const dispatch=useDispatch()
    const ADD=()=>{
        var arr=list;
        arr.push({
            id:list.length+1,
            title:title
        })
        dispatch({type:'list',payload:arr})
        settitle('')
        alert("Title Added Successfully")
    }
    return (
        <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',padding:20,justifyContent:'center'}}>
                <View style={{width:'90%',height:60,backgroundColor:'#fff',borderRadius:10,justifyContent:'center',alignItems:'center',shadowColor: 'black',
              shadowOpacity: 0.26,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 5,}}>
                <TextInput
                  style={styles.input}
                  autoCapitalize={'none'}
              
                  textContentType='emailAddress'
                  placeholder="Enter Title"
                  placeholderTextColor="#CCCCCC"

                  value={title}
                onChangeText={text=>settitle(text)}

                />
                </View>
                <TouchableOpacity style={{width:'90%',height:50,backgroundColor:'red',borderRadius:10,shadowColor: 'black',
              shadowOpacity: 0.26,
              borderRadius: 10,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 10,
              elevation: 5,marginTop:25}}
              onPress={()=>{
                  ADD()
            }}
              >
                    <LinearGradient
              
              start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c12015', '#d64a0c', '#e87002']}
                style={{
                  flexDirection: "row",flex:1,
                  height: 50,borderRadius:10,
                  justifyContent:'center',alignItems:'center'
                  // only for IOS to give StatusBar Space
                }}
              >
                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#fff', textAlign: 'center'}}>ADD</Text>
      
              </LinearGradient>
                </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },  input: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 4,
        fontSize: 20,
        fontFamily: 'montserrat-light',
        color:'#000',
      },
});

//make this component available to the app
export default AdminModules;
