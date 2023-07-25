import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleProfileUpdate = (user, name, url) => {
    setLoading(true);
    updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const handlerGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("https://meditation-0server.up.railway.app/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            localStorage.setItem("aceess-token", data.data.token);
          });
      } else {
        localStorage.removeItem("aceess-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const authData = {
    user,
    handleRegister,
    handleProfileUpdate,
    handleLogOut,
    handleSignIn,
    loading,
    handlerGoogleSignIn,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
