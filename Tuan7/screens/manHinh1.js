import { StyleSheet, Text, View,Image, Pressable, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App({navigation}) {
  var [data, setData] = React.useState([]);

  fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
  // useEffect(() => {
  //       fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error(error))
  // }, []);
  
  return (
    <View style={styles.container}>
      <View style={{flex:4, justifyContent: 'center', alignItems:'center'}}>
        <Text style={{fontSize:24, fontWeight:700, marginBottom:50}}>Welcome to Cafe world</Text>
        <View>
          <FlatList
            data = {data.slice(0,3)}
            renderItem={({item}) => (
              <View style={{flex:1, flexDirection:'row', marginBottom: 70}}>
                  <Image source={{uri: item.img}} style={{width: 200, height: 73}} />
              </View>
            )}
          />
        </View>
      </View>
      <View style={{flex:1,justifyContent: 'center', alignItems:'center'}}>
        <Pressable style={{backgroundColor:'#00BDD6', height:50, width:'80%', borderRadius:10,justifyContent: 'center', alignItems:'center'}}
          onPress={() => navigation.navigate('manHinh2')}
        >
          <Text style={{color:'white'}}>GET STARTED</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
