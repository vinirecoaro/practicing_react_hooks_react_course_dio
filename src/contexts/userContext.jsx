import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [name, setName] = useState('Vinicius')
    return <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>
}

export default UserContextProvider