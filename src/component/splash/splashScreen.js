import React, { useEffect, useState } from 'react';
import { View,Text, Dimensions,Image, Platform } from "react-native";
import styles from './splashStyles'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Splashscreen=()=>{
    return(
      <View style={styles.container}>  
        
                <View style={styles.body}>
                
                    <View style={styles.ImageCard}>
                            <Image
                        source={require('./../../../assets/Images/redink.png')}
                        transition={false}
                        style={{width:130,height:130,}}
                        
                            />

                    </View>
                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15,color:'#e87002',marginTop:10}}>REDINK</Text>
                    
               
                </View>
               


        </View>
      )

}
export default Splashscreen;