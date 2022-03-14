import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import { AuthContext } from '../context';
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation}) => {
    // const {signIn}=React.useContext(AuthContext);
    const [username,setusername]=React.useState('')
    const [password,setpassword]=React.useState('')
    const [email,setemail]=React.useState('')
    const [phone,setphone]=React.useState('')

    const [secure,setsecure]=React.useState(false)
    const [showme,setshowme] = React.useState(false)
    const dispatch = useDispatch()
    async function save(key, value) {
      await AsyncStorage.setItem(key, value);
      alert("User Added Successfully")
      navigation.goBack();
    //   signIn();
    }
    function userExists(data,name) {
        return data.some(function(el) {
          return el.username === name;
        }); 
      }
      function phoneCheck(data,phone) {
        return data.some(function(el) {
          return el.phone === phone;
        }); 
      }
      function emailCheck(data,email) {
        return data.some(function(el) {
          return el.email === email;
        }); 
      }
    const SignUp=async()=>{

        try {
           const data= await AsyncStorage.getItem('UserData')
            if (data!=null) {
                var parse=JSON.parse(data);
                 if (userExists(parse,username)) {
                    alert('UserName is Already Exist');
                    return;
                  }
                  if (emailCheck(parse,email)) {
                    alert('Email Address is Already Exist');
                    return;
                  } 
                  if (phoneCheck(parse,phone)) {
                    alert('Phone Number is Already Exist');
                    return;
                  } 
                  
                  parse.push(
                      {
                                 "username":username,
                                 "password":password,
                                 "email":email,
                                 "phone":phone
                      }
                  )
                    const jsonString=JSON.stringify(parse);
                    save("UserData",jsonString)
            }else{
                const userData=[{
                    "username":username,
                    "password":password,
                    "email":email,
                    "phone":phone
                }]
                const jsonString=JSON.stringify(userData);
                save("UserData",jsonString)
            }
            

  
          } catch (e) {
            // saving error
          }
 
    }
    return (
        <TouchableWithoutFeedback >
        <View style={styles.container}>

          <View style={styles.bigCircle}></View>
          <View style={styles.smallCircle}></View>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={styles.logoBox}>
                <Image
                  source={require('./../../../assets/Images/redink.png')}
                  style={{ width: 120, height: 120 }}
                />
                <Text style={{ fontSize: 18, fontFamily: 'Montserrat-Bold', color: '#FF5C31' }}>REDINK TASK</Text>

              </View>


              <View style={styles.inputBox}>

                <TextInput
                  style={styles.input}
                  autoCapitalize={'none'}
              
                  textContentType='emailAddress'
                  underlineColorAndroid="gray"
                  placeholder="Username"
                  placeholderTextColor="#CCCCCC"
                  underlineColorAndroid="#CCCCCC"

                  value={username}
      onChangeText={text=>setusername(text)}

                />
              </View>

              <View style={styles.inputBox}>

                <TextInput
                  style={styles.input}
                  autoCapitalize={'none'}
                  secureTextEntry={!secure}
                  textContentType='password'
                  underlineColorAndroid="gray"
                  placeholder="Password"
                  placeholderTextColor="#CCCCCC"
                  underlineColorAndroid="#CCCCCC"
                  value={password}
      onChangeText={text => setpassword(text)}
      
     // right={<TextInput.Icon name="eye" onPress={()=>setsecure(!secure)} />}
                />
              </View>
             <View style={styles.inputBox}>

                <TextInput
                  style={styles.input}
                  autoCapitalize={'none'}
              
                  textContentType='emailAddress'
                  underlineColorAndroid="gray"
                  placeholder="Email Address"
                  placeholderTextColor="#CCCCCC"
                  underlineColorAndroid="#CCCCCC"

                  value={email}
      onChangeText={text=>setemail(text)}

                />
              </View>
              <View style={styles.inputBox}>

                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  underlineColorAndroid="gray"
                  placeholder="Phone Number"
                  placeholderTextColor="#CCCCCC"
                  underlineColorAndroid="#CCCCCC"

                  value={phone}
      onChangeText={text=>setphone(text)}

                />
              </View>
              <TouchableOpacity style={styles.loginButton} onPress={SignUp}>

              <LinearGradient
              start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#c12015', '#d64a0c', '#e87002']}
              style={{paddingVertical: 10,
                borderRadius: 4,
                // only for IOS to give StatusBar Space
              }}
            >
                    <Text style={styles.loginButtonText}>Sign Up</Text>
              

            </LinearGradient>

              </TouchableOpacity>
              <Text style={{color:'black',alignSelf:'flex-end',fontFamily:"Montserrat-Light",marginTop:10}} onPress={()=>{
                navigation.navigate('login')
              }}>Already Have Account? SignIn</Text>

            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  export default SignUp;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: 'white'
    },
    bigCircle: {
      width: Dimensions.get('window').height * 0.7,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: 'white',
      borderRadius: 1000,
      position: 'absolute',
      right: Dimensions.get('window').width * 0.25,
      top: -50,
    },
    smallCircle: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: 'white',
      borderRadius: 1000,
      position: 'absolute',
      bottom: Dimensions.get('window').width * -0.2,
      right: Dimensions.get('window').width * -0.3,
    },
    centerizedView: {
      width: '100%',
      top: '15%',
    },
    authBox: {
      width: '90%',
      backgroundColor: 'white',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 5,
      paddingBottom: 30,
      shadowColor: '#000',
  
    },
    logoBox: {
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 0,
      alignSelf: "center",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: -50,
      marginBottom: -50,
  
  
    },
    loginTitleText: {
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10,
    },
    hr: {
      width: '100%',
      height: 0.5,
      backgroundColor: '#444',
      marginTop: 6,
    },
    inputBox: {
      marginTop: 40,
    },
    inputLabel: {
      fontSize: 18,
      marginBottom: 6,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 4,
      paddingHorizontal: 17,
      fontSize: 20,
      paddingBottom: 10,
      fontFamily: 'montserrat-light',
      color:'#000'
    },
    loginButton: {
      backgroundColor: '#FF5C31',
      borderRadius: 4,
      marginTop:15
  
    },
    loginButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Montserrat-Bold'
    },
    registerText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    forgotPasswordText: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 16,
    },
  });