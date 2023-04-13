import { createContext, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
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

  const testAuth = () => {
    console.log('testing')
  }

  return <UserContext.Provider value={{createUser, loginUser, testAuth}}>
    {children}
  </UserContext.Provider>
}

export const UserAuth = () => {
  return useContext(UserContext);
}