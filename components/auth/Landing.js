import React from 'react'
import { StyleSheet,Text, View, Button } from 'react-native'
import {Center} from '/Users/jacktrimboli/Desktop/App/components/other/Center.jsx'
export default function Landing({ navigation }) {
    return (
        <Center >
            <View style={styles.btn}>
              <Button
                title="Register"
                onPress={() =>navigation.navigate("Register")}/>
              <Button
                title="Login"
                onPress={() =>navigation.navigate("Login")}/>
            </View>
        </Center>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
    },
    header:{
        color: '#fff',
        marginTop: '30px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    btn: {
        marginLeft: '12px',
        marginRight: '12px',
    }
    
});
