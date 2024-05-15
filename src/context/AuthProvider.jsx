import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (name,email,password,photoURL)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle =()=>{
        return signInWithPopup(auth,googleProvider);
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            const loggedUser = { email: currentUser?.email || user?.email };
            setUser(currentUser);
            setLoader(false);
            console.log('observer',currentUser);
            if (currentUser) {
                axios.post('https://academia-server-sandy.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://academia-server-sandy.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return ()=>unsubcribe();
    },[])

    const authInfo = { user,createUser,loader,login,logOut,loginWithGoogle};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;