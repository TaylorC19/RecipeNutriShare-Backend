import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { signOut, onAuthStateChanged } from "firebase/auth";

// import { auth } from '../../firebase/firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [auth, setAuth] = useState({});

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('user_info'))) {
      setUser(JSON.parse(sessionStorage.getItem('user_info')));
    }
  }, [])

  const createUser = async (email, password) => {
    const userCred = await axios.post("/auth/signup", {
      email: email,
      password: password,
    });

    if (userCred) {
      setUser(userCred.data);
  
      sessionStorage.setItem('user_info', JSON.stringify(userCred.data))

      return userCred.data;
    } else {
      return false;
    }

    
  };
  
  const loginUser = async (email, password) => {
    const userCred = await axios.post("/auth/signin", {
      email: email,
      password: password,
    });

    if (userCred) {
      setUser(userCred.data); 
      sessionStorage.setItem('user_info', JSON.stringify(userCred.data))
  
      return userCred.data;

    } else {
      return false;
    }
    
  };

  const logOut =  () => {
    setUser({});
    sessionStorage.removeItem('user_info');
  };

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, logOut, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
