import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons'\
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from './main/Feed'
import SettingsScreen from './main/Settings'
import MyProjectsScreen from './main/MyProjects'

import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { fetchUser } from '../redux/actions/index'

const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="Feed" labeled={false}>
        <Tab.Screen 
          name="Feed" 
          component={FeedScreen} 
          options={{
           tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={32} color={color} /> 
           ),
        }}/>
        <Tab.Screen name="My Projects" component={MyProjectsScreen}
          options={{
           tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={32} color={color} /> 
           ),
        }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
           tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={32} color={color} /> 
           ),
        }}
        /> 
      </Tab.Navigator>
    );
  }
}
const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
