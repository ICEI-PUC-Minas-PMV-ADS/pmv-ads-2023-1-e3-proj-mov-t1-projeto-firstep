import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('');

  function setUserName(name) {

    setName(name)

  }
  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        setUserName
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}