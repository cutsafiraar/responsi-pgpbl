import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Button, Alert, Linking} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbzlVQLH2VE9FhCfE5hzSXQ6xETFLVzvfpUxja4_kbhB5Wowp8ZyOms4Anx90HL5QXy0/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }




    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.card}>
                                    {/* <View style={styles.avatar}>
                                        <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                    </View> */}
                                    <View>
                                        <Text style={styles.cardtitle}>{item.nama}</Text>
                                        <Text style={styles.subtitle}>Alamat Lengkap:  { item.alamat}</Text>
                                        <Text style={styles.subtitle}>Jam Operasional:  { item.jamoperasional}</Text>
                                    </View>
                                </View>
                                <View style={styles.lokasi} >
                                    <Button title="Lokasi"
                                        onPress={() => Linking.openURL('google.navigation:q=' + (item.latitude) + ',' + (item.longitude))}
                                        color={'#527853'}
                                    />
                                </View>


                            </View>
                        )}

                    />
                </View>

            )}
        </SafeAreaView>

    )
}

export default Callapi
const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 13,
        marginBottom: 5,
        color: 'black',
    },
    lokasi: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    cardtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        marginTop: 18,
        marginBottom: 10,
        borderRadius: 10,
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
})