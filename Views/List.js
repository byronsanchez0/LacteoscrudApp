import { StyleSheet, View, SafeAreaView, ScrollView, Text, Button, TouchableOpacity, Dimensions,DevSettings } from 'react-native';
import React,{useState,useEffect} from 'react'
import { Avatar, ListItem } from 'react-native-elements';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function List({navigation}) {

  const [data,SetData]=useState([]);


  function refreshPage() {
    window.location.reload(false);
  }


    var url="https://apimongobd-productos.herokuapp.com/api/list";

    fetch(url).then((res)=> res.json()).then((resJson)=>SetData(resJson))
if(data.length>0){
  return (

    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        {
          data.map((producto,i)=>(
            <ListItem style={{ borderColor:'#FF8800', borderWidth: 0.5}} key={i} bottomDivider onPress={()=>navigation.navigate("Detalles",{producto:producto})}>
            
            <Avatar width={140}
        height={110} source={{uri: producto.image}}></Avatar>
            <ListItem.Chevron/>
              <ListItem.Content style={{alignItems:'center'}}>
                <ListItem.Title style={{fontSize: 20,marginBottom: 10}} >{producto.name}</ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>{producto.price}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
          )
        }
     
      </View>
    
    </ScrollView>
     <TouchableOpacity style={styles.btnflotan} onPress={()=>{
             navigation.navigate('Agregar')
        
             
              }}><Text style={styles.textbtn}>+</Text></TouchableOpacity>
    </SafeAreaView>

  );
} else{
      return(
        <SafeAreaView>
          <View style={styles.container2}>
            <Text style={styles.bottom_text}>En mantenimiento</Text>
            <Button title='Refresh' onPress={()=>{DevSettings.reload();}}/>
          </View>
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:{
    backgroundColor: 'red',
    color: 'red',
    
  },
  btnflotan:{
    position: 'absolute',
    width: windowHeight/12,
    height: windowHeight/12,
    backgroundColor:'#FF8800',
    borderRadius: 30,
    bottom: 40,
    right: 15,
    elevation: 10,
    borderColor: 'white',
    borderWidth: 3
  },
  textbtn:{
    fontSize:30,
    alignSelf: 'center',
    textAlign:'center',
    padding: 9,
    color: 'white',
    fontWeight: 'bold'
  }
});