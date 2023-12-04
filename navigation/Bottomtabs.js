import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { WebView } from 'react-native-webview'
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();
const webMap = require('../peta/map.html')


function HomeScreen() {
  return (
    <ScrollView>
      <View style={ styles.listitems}>
        <Image source={require('../peta/panggang.jpg')} style={ styles.image }/>
        <Text style={ styles.caption }>Peta Geomorfologi Habitat Bentik Pulau Panggang dan Sekitarnya</Text>
      </View>
      <View style={ styles.listitems}>
        <Image source={require('../peta/babi.jpg')} style={ styles.image }/>
        <Text style={ styles.caption }>Peta Tentatif Habitat Bentik Wilayah Pulau Babi Tahun 2021</Text>
      </View>
      <View style={ styles.listitems}>
        <Image source={require('../peta/2022.jpg')} style={ styles.image }/>
        <Text style={ styles.caption }>Peta Potensi Kebakaran Lahan dan Hutan Pulau Kalimantan Tahun 2022</Text>
      </View>
    </ScrollView>
  );
}

function MapScreen() {
  return (
    <WebView
      source={ webMap }
    />
  );
}

function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}
function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerStyle: { backgroundColor: '#B3A492' } }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="home" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="map-marked-alt" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="user" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
          tabBarLabel: 'Mahasiswa',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="users" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 250,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 20
  }
})
