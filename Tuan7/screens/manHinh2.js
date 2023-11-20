import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, FlatList,SafeAreaView } from 'react-native';
import React, {useState, useEffect} from 'react';

export default function App({navigation}) {
    var [data, setData] = useState([])
    //  useEffect(() => {
    //     fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => console.error(error))
    // }, []);

    useEffect(() => {
            fetch('https://6540bd5245bedb25bfc27ba1.mockapi.io/api/lab7/shopCoffee')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);
    
  return (
    <View style={styles.container}>
        <SafeAreaView >
            <View style={{flexDirection:'row', justifyContent: 'space-around',position: 'fixed',width: "100%", height: 40,zIndex: 1, backgroundColor: 'rgba(243, 244, 246, 1)',marginTop:-10}}>
                <Pressable
                    onPress={()=>{navigation.goBack()}}
                >
                    <Image source={require('../assets/back.png')} 
                        style={{width:30, height:30}}
                    />
                </Pressable>
                <Text style={{fontSize:24, fontWeight:700}}>SHOP NEAR ME</Text>
                <Pressable>
                    <Image source={require('../assets/search.png')} 
                        style={{width:30, height:30}}
                    />
                </Pressable>
                
            </View>
            
            <Pressable onPress={()=>{navigation.navigate('manHinh3')}}>
                <View style={{marginTop:30}}>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <View style={{padding:10, marginBottom:10}}>
                                <View>
                                    <Image
                                        source={{uri: item.img}}
                                        style={{width:355, height:115}}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                        {/* {item.trangThai==="Accepting Orders" ? <Image source={require('../assets/acp.png')} style={{height:20, width:20}}/> : <Image source={require('../assets/lock.png')} style={{height:20, width:20}}/> } */}
                                        <Image source={item.imgTrangThai} style={{width:20, height:20}}/>
                                        <Text>{item.trangThai}</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={item.imgTime} style={{width:20, height:20}}/>
                                        <Text>{item.time}</Text>
                                    </View>
                                    <Image source={item.imgDiaChi} style={{width:20, height:20}}/>
                                </View>
                                
                            </View>
                        )}
                    />
                </View>      
            </Pressable>   
        </SafeAreaView>
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
