import { StyleSheet, Text, View,Image, Pressable, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App({navigation}) {

//   fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
//         .then((response) => response.json())
//         .then((json) => setData(json))
//         .catch((error) => console.error(error))
  // useEffect(() => {
  //       fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => console.error(error))
  // }, []);
  var [soLuong, useSoLuong] = React.useState(1);
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
    }]);
  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
          <View style={{flexDirection:'row',alignItems:'center',}}>
            <Pressable onPress={()=>{navigation.navigate('manHinh3')}} >
              <Image source={require('../assets/back.png')} 
                            style={{width:30, height:30}}
              />
            </Pressable>
            <Text style={{fontSize:30, fontWeight:700, marginLeft:20}}>Your order</Text>
          </View>
          <Pressable>
            <Image source={require('../assets/search.png')} 
                          style={{width:30, height:30}}
            />
          </Pressable>
        </View>

        <View style={{height:100,flexDirection:'row', justifyContent: 'space-between', alignItems:'center', borderWidth:1, padding:10, backgroundColor:'#00BDD6', borderColor:'#00BDD6', borderRadius:10}}>
            <View>
                <Text style={{fontSize: 20, fontWeight:700, color:'#ffff'}}>CAFE DELIVERY</Text>
                <Text style={{fontSize: 18, fontWeight:700, color:'#ffff'}}>Order #18</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight:700, color:'#ffff'}}>$20</Text>
        </View>
        <View style={{height:100,flexDirection:'row', justifyContent: 'space-between', alignItems:'center', borderWidth:1, padding:10, marginTop:20,backgroundColor:'#8353E2', borderColor:'#8353E2', borderRadius:10}}>
            <View>
                <Text style={{fontSize: 20, fontWeight:700, color:'#ffff'}}>CAFE</Text>
                <Text style={{fontSize: 18, fontWeight:700, color:'#ffff'}}>Order #18</Text>
            </View>
            <Text style={{fontSize: 20, fontWeight:700, color:'#ffff'}}>$68</Text>
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
        </View>
        <View style={{justifyContent: 'center', alignItems:'center', marginTop:50}}>
            <Pressable style={{backgroundColor:'#EFB034', width:'100%', height:44, justifyContent: 'center', alignItems:'center', borderRadiu:10}}>
                <Text style={{fontSize: 16, color:'#fff'}}>PAY NOW</Text>
            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10
  },
});
