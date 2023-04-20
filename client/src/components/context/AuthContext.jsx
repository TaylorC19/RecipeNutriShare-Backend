import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { signOut, onAuthStateChanged } from "firebase/auth";

// import { auth } from '../../firebase/firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [auth, setAuth] = useState({});

  useEffect(() => {
    try {
      setUser(JSON.parse(sessionStorage.getItem('user_info')));
      
    } catch (error) {
      
    }
    // if (JSON.parse(sessionStorage.getItem('user_info'))) {
    //   setUser(JSON.parse(sessionStorage.getItem('user_info')));
    // }
  }, [])

  const createUser = async (email, password) => {
    const userCred = await axios.post("/auth/signup", {
      email: email,
      password: password,
    })
      .then(result => result.data);

    if (userCred) {
      setUser(userCred);
  
      sessionStorage.setItem('user_info', JSON.stringify(userCred.data))

      return userCred;
    } else {
      alert("Could not create an account, check you email and password and try again.");
      return false;
    }

    
  };
  
  const loginUser = async (email, password) => {
    const userCred = await axios.post("/auth/signin", {
      email: email,
      password: password,
    })
      .then(result => result.data);
    console.log(userCred)

    if (userCred) {
      setUser(userCred); 
      sessionStorage.setItem('user_info', JSON.stringify(userCred.data))
  
      return userCred;

    } else {
      alert("Could not sign in, please check your email and password and try again.");
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
