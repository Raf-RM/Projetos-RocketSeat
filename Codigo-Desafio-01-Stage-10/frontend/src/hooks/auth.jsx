import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});

  async function signIn({email, password}){
    try{
      const response = await api.post("sessions", {email, password});
      const { user, token } = response.data;
      api.defaults.headers.authorization = `Beare ${token}`;
      setData({user, token})
      localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@RocketMovies:token", token);
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível efetuar o login.")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@RocketMovies:user");
    localStorage.removeItem("@RocketMovies:token");
    setData({})
    }

  useEffect(() => {
    const user = localStorage.getItem("@RocketMovies:user");
    const token = localStorage.getItem("@RocketMovies:token");
    if(user && token){
      api.defaults.headers.authorization = `Beare ${token}`;
      setData({user: JSON.parse(user), token});
    }
  },[]);

  return (
    <AuthContext.Provider value={{signIn, signOut, user:data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){  
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth };
