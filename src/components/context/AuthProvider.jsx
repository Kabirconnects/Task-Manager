import React, { useEffect, useState } from "react";
import { getlocalStorage } from "../utils/LocalStorage";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    // Retrieve data from localStorage
    const { employees, admin } = getlocalStorage();
    if (employees || admin) {
      setData({ employees: employees || [], admin: admin || [] });
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    if (data.employees.length > 0 || data.admin.length > 0) {
      localStorage.setItem("employees", JSON.stringify(data.employees));
      localStorage.setItem("admin", JSON.stringify(data.admin));
    }
  }, [data]);

  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
