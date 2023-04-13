import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebase'

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, (currentUser) => {
      console.log(authenticatedUser)
      setUser(currentUser)
    })
  }, [user])

  const createUser = async (email, password) => {
    const userCred = await axios.post('/auth/signup', { 
      email: email, 
      password: password
    });

    return userCred.data;
  }
  
  const loginUser = async (email, password) => {
    const userCred = await axios.post('/auth/signin', { 
      email: email, 
      password: password
    });
    
    return userCred.data;
  }

  const logOut = async () => {
    await signOut(auth);
  }

  const testAuth = () => {
    console.log('testing')
  }

  return <UserContext.Provider value={{createUser, loginUser, testAuth, logOut, user}}>
    {children}
  </UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}