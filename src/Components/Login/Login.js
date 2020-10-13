import React, { useContext, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import logo from '../../images/logos/logo.png'
import './Login.css'
import google from '../../images/google.png'
import { userContext } from '../../App';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    //handle sign up with google

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: ''
    });
    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    // handle sign out
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    return (

        <div>
            <Navigation></Navigation>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 text-center m-4 shadow p-4 mb-5 bg-white rounded">
                        <img style={{ height: '60px' }} className="ml-4 mb-5" src={logo} alt="" />
                        <h2>Login With.........</h2>
                        <div className="signup mt-5" onClick={googleSignIn}>
                            <img src={google} className="img-fluid float-left" alt="" /> <span className="text-center">
                                Continue with google
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;