import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF'
    },
    body: {
   
        width: ('100%'),
        height: ('80%'),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF'
        
    },
    footer:{
        width: ('100%'),
        height: ('20%'),
        alignItems:'center',
        justifyContent:"flex-end"
    },
    footer1:{
        width: ('100%'),
        height: ('20%'),
        alignItems:'center',
        justifyContent:'flex-end',
    },
    body2: {
   
        width: ('100%'),
        height: ('80%'),
        justifyContent:'center',
        alignItems:'center',
        
    },
    ImageCard:{
        width:150,height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: wp(3),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#FFF',
        position:'relative'
    },
    id:{
        fontSize:25,fontFamily:'Montserrat-Light',color:'#000'
    }
    
})