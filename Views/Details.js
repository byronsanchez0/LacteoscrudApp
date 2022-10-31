import { StyleSheet, View, SafeAreaView, ScrollView, Text, Button,Image } from 'react-native';
import React,{useState,useEffect} from 'react'
import { Avatar, ListItem } from 'react-native-elements';

export default function Details({navigation,route}) {
  
  const {producto}=route.params;

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
     
        <Image 
        source={{uri:producto.image}}
        style={styles.img}/>
        <Text style={styles.txttitle}>{producto.name}</Text>
        <Text style={styles.txtdes}>{producto.description}</Text>
        <Text style={styles.txt}>{producto.price}</Text>
   
     </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  img:{
    width:300, 
    height:200,
    borderRadius:10,
    borderWidth:3,
    borderColor:'black'
  },
  txttitle:{
    fontSize:35,
    margin:15,
  },
  txtdes:{
    fontSize: 20
  },
  txt:{
    fontSize: 30,
    color:'green',
    margin: 20
  }
 
});