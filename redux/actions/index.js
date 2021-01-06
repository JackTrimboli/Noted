import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'
import{ SnapshotViewIOSComonent } from 'react-native'

export function fetchUser(){
    return((dispatch) => { //get dispatch
        firebase.firestore() //from firestore db
        .collection("users") //in this collection
        .doc(firebase.auth().currentUser.uid) //in this doc
        .get() //retrieves fields
        .then((snapshot) => {
            if(snapshot.exists){ // if the snaps shot of the data exists
                dispatch({type : USER_STATE_CHANGE, currentUser : snapshot.data()})
            }
            else{
                console.log('does not exist')
            }
        })
    })
}