//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,FlatList,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// create a component
const ListView = () => {
    const data=[1,2,3,4,5,6,7,8,9,10]
    const {list}=useSelector((state)=>state.sample)
    const dispatch=useDispatch()
    const Delete=(item)=>{
        list.splice(list.findIndex(a => a.id === item.id) , 1)
        dispatch({type:'list',payload:list})
    }
    return (
        <View>
                <FlatList
                    data={list}
                    keyExtractor={({ id }, index) => `${id}${index}`}
                    renderItem={({ item }) => <View style={styles.container}>

                            <View style={styles.itemlist}>
                                    <View style={styles.ItemModules}>

                                            <Text style={{color:'#000'}}>{item.title}</Text>
                                            <TouchableOpacity style={{backgroundColor:'#21bede',height:'100%',width:'20%',justifyContent:'center',alignItems:'center',  borderTopRightRadius: 10,borderBottomRightRadius:10}} onPress={()=>{
                                                Delete(item)
                                            }}>
                                            <Text style={{color:'#fff',fontFamily:'Montserrat-Bold'}}>DELETE</Text>

                                            </TouchableOpacity>
                                    </View>
                            </View>
                    </View>}
                />
                
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding:10,
        borderRadius: 10, flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',

    },itemlist: {
        borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f8f8f8',
    },ItemModules: {
        width: "100%", height:50, justifyContent: 'space-between',alignItems:'center', paddingLeft: 10,flexDirection:'row'
    },
});

//make this component available to the app
export default ListView;
