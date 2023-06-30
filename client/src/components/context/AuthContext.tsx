import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import axios from "axios";
import auth from '../../firebase/firebase'
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';

import { User as firebaseAuthUser } from "firebase/auth";

interface AuthContextProps {
  createUser: (email: string, password: string) => Promise<any>;
  loginUser: (email: string, password: string) => Promise<any>;
  logOut: () => Promise<any>;
  user: firebaseAuthUser | null;
}

const UserContext = createContext<AuthContextProps | null>(null);

// export const AuthContextProvider = ({ children }) => {
  export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
    children,
  }) => {
    const [user, setUser] = useState<firebaseAuthUser | null>(null);

    useEffect(() => {
      const authenticatedUser = onAuthStateChanged(auth, (currentUser) => {
        // console.log('🫡', currentUser);
        setUser(currentUser || null);
      });
      return authenticatedUser;
    }, []);

    const createUser = async (email: string, password: string) => {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      return newUser;
    };

    const loginUser = async (email: string, password: string) => {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      return userCred;
    };

    const logOut = () => {
      return signOut(auth);
    };

    return (
      <UserContext.Provider value={{ createUser, loginUser, logOut, user }}>
        {children}
      </UserContext.Provider>
    );
  };

export const UserAuth = (): AuthContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};