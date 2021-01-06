import React from 'react'
import { StyleSheet,Text, View, Button } from 'react-native'
import {Center} from '/Users/jacktrimboli/Desktop/App/components/other/Center.jsx'
export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
              <Button
                title="Register"
                onPress={() =>navigation.navigate("Register")}
                style={styles.btn}
                />
              <Button
                title="Login"
                onPress={() =>navigation.navigate("Login")}
                style={styles.btn}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ivory',
    },
    btn:{
        borderRadius: '50px'
    }
});
