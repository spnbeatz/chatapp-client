import React, { useContext, createContext, useState, useEffect } from "react";
import "@/styles/globals.css";

interface AuthContextType {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

const defaultValue: AuthContextType = {
    token: "",
    setToken: () => {}
}

const AuthContext = createContext<AuthContextType>(defaultValue);

interface AuthProviderProps {
    children: React.ReactNode;
    fallback: React.ReactNode;
  }

export const AuthProvider: React.FC<AuthProviderProps> = ({children, fallback}) => {
    const [ token, setToken ] = useState<string>("");

    if(token == ""){
        return <>{fallback}</>
    }

    return (
        <AuthContext.Provider value={{ token, setToken }}>
          {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

