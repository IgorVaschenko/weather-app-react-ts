import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { authentication } from 'firebase-config'
import { setError } from 'store/actions/weatherActions';

import { Google, LogOutButton, Sign, SignButton } from 'containers/SignIn/components';

const SignIn = () => {
    const dispatch = useDispatch()

    const [isUserSignedIn, setIsUserSignedIn] = useState(true)
    const auth = getAuth();

    useEffect(() => {
        auth.onAuthStateChanged((user) => user ? setIsUserSignedIn(true) : setIsUserSignedIn(false))
    }, [auth])

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .catch((err) => {
                dispatch(setError(err.message))
            })
    }
    const signOut = () => auth.signOut()

    return (
        <>
            {isUserSignedIn
                ? <LogOutButton onClick={signOut}>LOG OUT</LogOutButton>
                : <SignButton onClick={signInWithGoogle}>
                    <Google />
                    <Sign>SIGN IN</Sign>
                </SignButton>
            }
        </>
    )
}

export default SignIn;


