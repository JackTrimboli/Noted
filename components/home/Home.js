import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Center} from '/Users/jacktrimboli/Desktop/App/components/other/Center.jsx'

export default function HomeScreen({ navigation }){
  return (
    <Center>
      <Text>This text is centered.</Text>
    </Center>
  )
}
