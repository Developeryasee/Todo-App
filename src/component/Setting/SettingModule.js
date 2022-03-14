import React from 'react';
import { StyleSheet, Text, View ,ActivityIndicator,StatusBar} from 'react-native';
import { useSelector } from 'react-redux';
import { AuthContext } from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Account(props) {
    // const {userdata}=useSelector((state)=>state.Delivered)
    const handle=async()=>{
        const token=await AsyncStorage.getItem('user_token')
        const data=await AsyncStorage.getItem('UserData')
        var parse=JSON.parse(data);
        let obj = parse.find(o => o.phone === token.toString());

        setname(obj.username)
        setemail(obj.email)
        setphn(obj.phone)

      }
    const {signOut}=React.useContext(AuthContext);
   

    
    const [name,setname]=React.useState('')
    const [email,setemail]=React.useState('')
    const [phn,setphn]=React.useState('')
    React.useEffect(() => {
            handle()
    },[])

    let content;

    try {
        content=<>
        <View style={styles.body}>
            <View style={{width:'100%',height:'10%',borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'column'}}>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'gray',fontFamily:'Montserrat-Light'}}>Name</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'black',fontFamily:'Montserrat-Light',alignSelf:'flex-start'}}>{name}</Text>
                </View>
            </View>
            <View style={{width:'100%',height:'10%',borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'column',marginTop: 20}}>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'gray',fontFamily:'Montserrat-Light'}}>Contact No</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'black',fontFamily:'Montserrat-Light',alignSelf:'flex-start'}}>{phn}</Text>
                </View>
            </View>

            <View style={{width:'100%',height:'10%',borderBottomColor:'gray',borderBottomWidth:1,flexDirection:'column',marginTop: 20}}>
                <View style={{flex:0.5,justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'gray',fontFamily:'Montserrat-Light'}}>Email</Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'black',fontFamily:'Montserrat-Light',alignSelf:'flex-start'}}>{email}</Text>
                </View>
            </View>
            {/* <View style={{width:'100%',height:'10%',flexDirection:'row',marginTop: 20}}>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#C9252B',fontFamily:'Montserrat-Bold'}} onPress={()=>{props.navigation.navigate('Change Password')}}>Change Password</Text>
                </View>
            </View> */}
            <View style={{width:'100%',height:'10%',flexDirection:'row',marginTop: 5}}>
                <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:18,color:'#C9252B',fontFamily:'Montserrat-Bold'}} onPress={signOut}>LOGOUT</Text>
                </View>
            </View>

        
        </View>
        </>
    } catch (error) {
        
    }
 return (
        <View style={styles.container}>
        {
            content
        }
      
    </View>
      
    );
  
 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        


    },
   
    body: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        padding:30
    }

});