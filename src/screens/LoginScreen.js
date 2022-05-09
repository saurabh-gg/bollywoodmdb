import * as React from 'react';
import {View, Text, Image ,TouchableOpacity, StyleSheet} from 'react-native';

import CustomHeader from '../header/CustomHeader';
const LoginScreen = ({navigation})=>{

    return(
        <>
        {/* <CustomHeader navigation={navigation} isHome={false} /> */}
        <View style={{flex:1 , alignItems:'center', justifyContent:'center'}}>
            <View style={{height:110, width:200, marginVertical:20}}>   
                <Image source={require('../assets/logobmdb.png')}
                 style={{height:'100%', width:'100%', resizeMode:'contain',  }}
                />
            </View>
               <TouchableOpacity style={styles.facebookBtn} >
                   <View style={{height:40, width:40}}>
                       <Image source={require('../assets/facebook.png')} style={{height:'100%', width:'100%'}}/>  
                   </View>
                   <Text style={{width:300,padding:5 , textAlign:'center', fontSize:15 ,fontWeight:'500', color:'white'}}>Login with Facebook</Text>

               </TouchableOpacity>
               <TouchableOpacity style={styles.googleBtn} >
                   <View style={{height:40, width:40}}>
                       <Image source={require('../assets/googles.png')} style={{height:35, width:35, tintColor:'white'}}/>  
                   </View>
                   <Text style={{width:300,padding:5 , textAlign:'center' ,fontSize:15 ,fontWeight:'500', color:'white'}}>Login with Google</Text>

               </TouchableOpacity>
            <View>
            <Text onPress={()=> navigation.navigate('Home')}
             style={{textDecorationLine:'underline', fontSize:15 ,fontWeight:'600', marginVertical:10}}>Skip for now</Text>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    facebookBtn:{
        backgroundColor:'#3b5998',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:4,
        marginVertical:10,  
    },
    googleBtn:{
        backgroundColor:'#db4a39',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:4,
        marginVertical:10,
    }
})

export default LoginScreen;