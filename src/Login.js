import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign In
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="logoKarriery.png" alt="" style={{marginBottom:"50px"}} />

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
