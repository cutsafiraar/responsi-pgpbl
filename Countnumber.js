import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native' 

const Countnumber = () => {
    const [number, setNumber] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{number}</Text>
            <View style={styles.button}>
                <Button title="Ubah Number" onPress={() => setNumber(number + 1)} />
            </View>
            <View>
                <Button title="Reset" onPress={() => setNumber(0)} color="red"/>
            </View>
        </View>
    )
}

export default Countnumber

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
    button: {
      margin: 10,
    },
    text: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 40,
    }
   })
   