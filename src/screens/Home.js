import { Button, ImageBackground, StyleSheet, Text, View,Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';



const Home = (props) => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const cities = [
    {
      name: 'New Delhi',
      image: require('../asset/images/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../asset/images/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../asset/images/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../asset/images/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../asset/images/image7.jpg'),
    },
  ];
  return (
    <View>
      
    <ImageBackground source={require('../asset/images/background.jpg')}
    style={{width:deviceWidth,height:deviceHeight}}
    imageStyle={{opacity:0.6,backgroundColor:'black'}}
    />
    <View style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
      <View style={{ flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,}}>
        <Icon name="menu" size={46} color="white"/>
        <Image source={require('../asset/images/user.jpg')}  style={{height: 46, width: 46, borderRadius: 50}}/>
      </View>
      <View style={{paddingHorizontal: 20,}}>
        <Text  style={{fontSize: 25, color: 'white',fontWeight: '700'}}>Hello User,</Text>
        <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>Search the city by the name</Text>
        <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
          <TextInput
           value={city}
           onChangeText={val => setCity(val)}
           placeholder="Search City"
           placeholderTextColor="white"
           style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
        </View>
        <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginBottom: 20,marginTop:20}}>
            My Locations
          </Text>
          <FlatList
          horizontal
          data={cities}
          renderItem={({item})=>(
            <Card name={item.name} image={item.image} navigation={props.navigation}/>
          )}
          />
      </View>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})