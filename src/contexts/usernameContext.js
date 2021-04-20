import { createContext, useState, useMemo, useContext} from 'react';

const UserNameContext = createContext();

export const UserNameProvider = ({ children }) => {
    const [name, setName] = useState(); 
    
    const value = useMemo(() => ({name, setName}), [name, setName])

    return (
    <UserNameContext.Provider value={value}>
        {children}
    </UserNameContext.Provider>
    )
};

export function useUserNameContext() {
    const nameContext = useContext(UserNameContext)

    return nameContext;
}