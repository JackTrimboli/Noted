import React, { Component } from 'react'
import Center from './other/Center'
import {View, Text} from 'react-native'

import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { fetchUser } from '../redux/actions/index'

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        const{currentUser} = this.props;
        console.log(currentUser)
        if(currentUser == undefined){
            return (
                <Center>
                    <Text>User is Logged in.</Text>
                </Center>
            )
        }
        return (
            <Center>
                <Text>{currentUser.name} is Logged in.</Text>
            </Center>
        )
    }
}
const mapStateToProps= (store) =>({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
