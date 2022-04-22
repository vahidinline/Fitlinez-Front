import { useContext, useEffect, useState, createContext } from 'react';
import { auth } from '../../db/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
const AuthContext = createContext({
  currentUser: null,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return signOut(auth);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:3000/login',
    });
  }

  function verifyUser(email) {
    return sendEmailVerification(auth, email);
  }
  function updateUser(userData) {
    return updateProfile(auth.currentUser, {
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      weight: userData.weight,
    })
      .then(() => {
        console.log(userData.weight);
        // ...
      })
      .catch((error) => {
        console.log('// An error occurred');
        // ...
      });
  }
  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    verifyUser,
    updateUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
