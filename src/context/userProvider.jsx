import React, {createContext, useState} from "react";

export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const[avatar,setAvatar] = useState("")
  return (
    <UserContext.Provider value={{avatar, setAvatar}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider