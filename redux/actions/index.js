import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'

export function fetchUser(){
    return((dispatch) => { //get dispatch
        firebase.firestore() //from firestore db
        .collection("user") //in this collection
        .doc(firebase.auth().currentUser.uid) //in this doc
        .get() //retrieves fields
        .then((snapshot)) 
            if(snapshot.exists){ // if the snaps shot of the data exists
                //call a dispatch event to change the state of the curr user
                dispatchEvent({type : USER_STATE_CHANGE, currentUser : snapshot.data()})
            }
            else{
                console.log('does not exist')
            }
    })
}