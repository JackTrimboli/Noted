import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeEqToJFVlFUTkVPdLNRNw32FLzj7Z2wM",
  authDomain: "noted-demo.firebaseapp.com",
  projectId: "noted-demo",
  storageBucket: "noted-demo.appspot.com",
  messagingSenderId: "374976912400",
  appId: "1:374976912400:web:6e9d1a2fcf864b9d113e95",
  measurementId: "G-16QWP43EDJ"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();


export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,

    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }  
    })
  }
  render() {
    const{ loggedIn, loaded } = this.state
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>User is logged in.</Text>
        </View>
    )
  }
}

export default App



