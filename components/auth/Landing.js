import React from 'react'
import { StyleSheet,Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.btn}>
              <Button
                title="Register"
                onPress={() =>navigation.navigate("Register")}/>
              <Button
                title="Login"
                onPress={() =>navigation.navigate("Login")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
