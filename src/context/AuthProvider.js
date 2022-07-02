import React from 'react';
import { createContext } from 'react';
import useFireBase from '../hooks/useFirebase/UsefireBase';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFireBase();
    return (
        <AuthContext.Provider value={allContext}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;