import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";
import auth from '../../firebase/firebase'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const authenticatedUser = onAuthStateChanged(auth, 
      (currentUser) => {
        // console.log('🫡', currentUser);
        setUser(currentUser || {});
      })
      return authenticatedUser;
  }, [])

  const createUser = async (email, password) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    return newUser;
  };
  
  const loginUser = async (email, password) => {
    const userCred = await signInWithEmailAndPassword(auth, email, password)
    
    return userCred;
  };

  const logOut =  () => {
    return signOut(auth);
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
