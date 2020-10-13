import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                error: '',
                success: true
            };
            getUserToken();
            return signedInUser;
        })
        .catch(err => {
            const errorMessage = err.message;
            const error = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: errorMessage,
                success: false
            }
            return error;

        })

}
// get uer token
const getUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then((idToken) => {
            sessionStorage.setItem('userToken', idToken)
        }).catch((error) => {
            // Handle error
        });
}
//sign out
export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: false
            }
            return signedOutUser;
        }).catch(err => {
            // An error happened.
        });
}

