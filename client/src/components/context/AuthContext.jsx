import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { signOut, onAuthStateChanged } from "firebase/auth";

// import { auth } from '../../firebase/firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState({});

// this part gets the auth credentials in the first on
  // useEffect( () => {
  //   async function getAuth() {
  //     const newAuth = await axios.get('/auth/get-auth')
  //       .then((result) => result.data);
  //     console.log(newAuth);
  //     setAuth(newAuth)
  //   }
  //   getAuth();
  // },[])

// this part is to store signin information
  // useEffect(() => {
  //   function getCreds() {
  //     async function getAuth() { //I was trying to move the getAuth function here so that it would be set for onAuthStateChanged
  //       const newAuth = await axios
  //       .get("/auth/get-auth")
  //       .then((result) => result.data);
  //       console.log(newAuth);
  //       setAuth(newAuth);
  //     }
  //     getAuth();
  //     console.log(onAuthStateChanged);
  //     const authenticatedUser = onAuthStateChanged(
  //       auth,
  //       (currentUser) => {
  //         console.log(currentUser);
  //         setUser(currentUser);
  //       }
  //     );
  //     console.log(authenticatedUser);

  //     return authenticatedUser;
  //   }

  //   return getCreds();
  // }, [auth]);

  const createUser = async (email, password) => {
    const userCred = await axios.post("/auth/signup", {
      email: email,
      password: password,
    });

    return userCred.data;
  };

  const loginUser = async (email, password) => {
    const userCred = await axios.post("/auth/signin", {
      email: email,
      password: password,
    });

    return userCred.data;
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const testAuth = () => {
    console.log("testing");
  };

  return (
    <UserContext.Provider
      value={{ createUser, loginUser, testAuth, logOut, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
