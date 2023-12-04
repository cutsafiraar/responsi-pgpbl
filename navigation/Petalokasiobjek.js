import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview'
import Getjsonfile from '../Getjsonfile';
import Callapi from '../Callapi';

const Tab = createBottomTabNavigator();
//const webMap = require('../peta/map.html');

//form input dari github pages
const forminput = 'https://cutsafiraar.github.io/pgpbl-12/';

//peta web dari github pages
const webMap = 'https://cutsafiraar.github.io/pgpbl-12/map.html';


function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>ESCAPE BUDDY</Text>
          <Text style={styles.subtitle}>(Aplikasi Persebaran Lokasi Escape Building di Banda Aceh)</Text>
          <View style={styles.container}>

            <Text style={styles.text}>Escape Building atau gedung evakuasi merupakan struktur atau sebuah fasilitas yang dirancang khusus untuk memberikan perlindungan dan memfasilitasi evakuasi cepat dalam menghadapi ancaman tsunami.
              Keberadaan escape building di Banda Aceh memiliki berbagai fungsi, diantaranya sebagai tempat evakuasi bagi masyarakat sekitar yang tinggal di sepanjang garis pantai bila sewaktu-waktu bahaya tsunami mengancam keselamatan jiwa penduduk.
              Bangunan ini juga dapat digunakan sebagai tempat pendaratan helikopter (helipad) dalam memberikan bantuan kepada korban tsunami. Bangunan ini diatur agar dapat menahan gempa 9 - 10 SR dengan kapasitas sekitar 1000 orang.
              Lantai 2 dan 3 pada bagunan ini di lengkapi dengan peralatan dan fasilitas untuk evakuasi dengan kapasitas penampungan sebesar 300 orang, sedangkan pada lantai 4 menjadi tempat evakuasi paling atas yang dapat menampung sekitar 500 orang dan sebagai tempat landasan Helikopter.
              Terdapat empat escape building yang di bangun pada wilayah Banda Aceh, yaitu :</Text>
            <View style={styles.listitems}>
              <Text style={styles.caption}>1. Escape Building Deah Glumpang</Text>
              <Image source={require('../peta/1.jpg')} style={styles.image} />
            </View>
            <View style={styles.listitems}>
              <Text style={styles.caption}>2. Tsunami Escape Building Alue Deah Teungoh</Text>
              <Image source={require('../peta/2.jpg')} style={styles.image} />
            </View>
            <View style={styles.listitems}>
              <Text style={styles.caption}>3. Escape Building Ulee Lheue</Text>
              <Image source={require('../peta/3.jpeg')} style={styles.image} />
            </View>
          </View>
          <View style={styles.listitems}>
            <Text style={styles.caption}>4. Escape Building Pekan Bada Aceh</Text>
            <Image source={require('../peta/4.jpeg')} style={styles.image} />
          </View>

          <View style={styles.container}>

            <Text style={styles.stack}>Stack</Text>
            <Text style={styles.stack}>1. React Native</Text>
            <Text style={styles.stack}>2. HTML</Text>
            <Text style={styles.stack}>3. LeafletJS</Text>
            <Text style={styles.stack}>4. Google Sheets</Text>
            <Text style={styles.stack}>5. Apps Script</Text>
            <Text style={styles.stack}>6. FontAwesome5</Text>
            <Text style={styles.stack}>7. GitHub</Text>
          </View>
        </View>
      </View>


    </ScrollView>
  );
}

function MapScreen() {
  return (
    <WebView
      source={{ uri: webMap }}
    />
  );
}

function AddDataScreen() {
  return (
    <WebView
      source={{ uri: forminput }}
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

function ListDataScreen() {
  return (
    <View>
      <Callapi />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#527853', } }}  >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size }) => (
            <Fontawesome5 name="home" color={'#F9F9E0'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Map" component={MapScreen} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="map-marked-alt" color={'#F9F9E0'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Add Data" component={AddDataScreen} options={{
          tabBarLabel: 'Add Data',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="plus-circle" color={'#F9F9E0'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="List Data" component={ListDataScreen} options={{
          tabBarLabel: 'List Data',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="list" color={'#F9F9E0'} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Fontawesome5 name="user" color={'#F9F9E0'} size={size} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  text: {
    fontSize: 13,
    textAlign: 'justify',
    marginBottom: 7,
    backgroundColor: '#CCEEBC',
    color: 'black',
  },
  stack: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#CCEEBC',
    color: 'black',
  },
  container: {
    marginTop: 10,
    marginHorizontal: 30,
    backgroundColor: '#CCEEBC',
  },
  image: {
    width: 250,
    height: 150,
    resizeMode: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,

  },
  listitems: {
    alignItems: 'center',
    backgroundColor: '#CCEEBC',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    marginTop: 18,
    marginBottom: 18,
    borderRadius: 20,
    backgroundColor: '#CCEEBC',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7
  },
});
