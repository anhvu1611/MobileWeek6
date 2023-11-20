import { StyleSheet, Text, View,Image, Pressable, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App({navigation}) {
  //var [data, setData] = React.useState([]);
  var [soLuong, useSoLuong] = React.useState(0);
  const handleIncre = () => {
    useSoLuong(soLuong+1);
  }
  const handleDecrement = () => {
    useSoLuong(soLuong-1);
  }

  var [data, setData] = React.useState([{
        "name": "Milk",
        "price": 20,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    },
    {
        "name": "Origin",
        "price": 68,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    },
    {
        "name": "Culi",
        "price": 1,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/zjjofzsc9ladhxqibodb.png"
    },
    {
        "name": "Espresso",
        "price": 9,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/v6abdhs7mbnaugrwijfb.png"
    },
    {
        "name": "Capuchino",
        "price": 23,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/eo8yqsiu1q2qzyx6mxpi.png"
    },
    {
        "name": "Weasel",
        "price": 20,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/v6abdhs7mbnaugrwijfb.png"
    },
    {
        "name": "Culi",
        "price": 1,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742914/reactnative-week7-cafeworld/zjjofzsc9ladhxqibodb.png"
    },
    {
        "name": "Catimor",
        "price": 9,
        "image": "https://res.cloudinary.com/tranquanghuyit09/image/upload/v1698742913/reactnative-week7-cafeworld/ssn37c6opzuxow9o2gek.png"
    }]);
  // useEffect(() => {
  //       fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error(error))
  // }, []);
  
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
          <View style={{flexDirection:'row',alignItems:'center',}}>
            <Pressable  >
              <Image source={require('../assets/back.png')} 
                            style={{width:30, height:30}}
              />
            </Pressable>
            <Text style={{fontSize:30, fontWeight:700, marginLeft:20}}>Drinks</Text>
          </View>
          <Pressable>
            <Image source={require('../assets/search.png')} 
                          style={{width:30, height:30}}
            />
          </Pressable>
        </View>

        <View>
          <FlatList
            data={data}
            renderItem={({item})=>(
              <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center', borderWidth:1, borderColor:'gray', marginVertical:10}}>
                <View style={{flexDirection:'row'}}>
                  <Image
                    source={{uri: item.image}}
                    style={{width:60, height:60}}
                  />
                  <View style={{ justifyContent: 'center', marginLeft:10}}>
                    <Text style={{fontSize:18, fontWeight:700}}>{item.name}</Text>
                    <Text>${item.price}</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Pressable onPress={handleDecrement}>
                    <Image 
                      source={require('../assets/tru.png')}
                      style={{width:20, height:20, marginRight:5}}
                    />
                  </Pressable>
                  <Text>{soLuong}</Text>
                  <Pressable onPress={handleIncre}>
                    <Image 
                      source={require('../assets/cong.png')}
                      style={{width:20, height:20, marginHorizontal:5}}
                    />
                  </Pressable>
                </View>
              </View>
            )}  
          />

          <View style={{justifyContent:'center', alignItems: 'center', marginTop:30}}>
            <Pressable style={{backgroundColor:'#EFB034', height:44, width:'100%',justifyContent:'center', alignItems: 'center'}}>
                <Text style={{color:'#ffff'}}>GO TO CART</Text>
            </Pressable>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:18,
  },
});
