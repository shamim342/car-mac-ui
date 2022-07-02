import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initialize from "../init";

initialize();

const useFireBase =()=>{
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

  const signwithGoogle =()=>{
      setIsLoading(true);
     return signInWithPopup(auth, googleProvider)
   
    .finally(()=>setIsLoading(false));
  }

  useEffect(()=>{
      const unsubscribed = onAuthStateChanged (auth , user=>{

            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false);
      })
      return unsubscribed;
  },[])

  const logOut =()=>{
      setIsLoading(true)
      signOut(auth)
      .then(()=>{
          setUser({});
      })
      .finally(()=>setIsLoading(false));
  }
  return {
      user ,
      isLoading,
      signwithGoogle,
      logOut
  }

}

export default useFireBase;