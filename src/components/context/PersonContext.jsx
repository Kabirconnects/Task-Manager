import React, { createContext, useState, useContext } from 'react';

// Create the PersonContext
export const PersonContext = createContext();

// Create the PersonProvider component
export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState(null);

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

// Custom hook to use PersonContext
export const usePerson = () => useContext(PersonContext);
