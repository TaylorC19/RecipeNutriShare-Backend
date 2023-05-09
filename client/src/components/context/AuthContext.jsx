import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
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
        console.log('🫡', currentUser);
        setUser(currentUser);
      })
      return authenticatedUser;
  }, [])

  const createUser = async (email, password) => {
    const newUserInfo = {
      email: email,
      password: password,
      uid: null
    };

    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    newUserInfo.uid = newUser.user.uid;
    await axios.post('/auth/signup', newUserInfo);
    return newUser;

    
  };
  
  const loginUser = async (email, password) => {
    const userCred = await axios.post("/auth/signin", {
      email: email,
      password: password,
    })
      .then(result => result.data);
    

    if (userCred) {
      setUser(userCred); 
      sessionStorage.setItem('user_info', JSON.stringify(userCred))
  
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
