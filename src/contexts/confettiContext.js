import { createContext, useState, useMemo, useContext} from 'react';

const ConfettiContext = createContext();

export const ConfettiProvider = ({ children }) => {
    const [party, setParty] = useState(false); 
    
    const value = useMemo(() => ({party, setParty}), [party, setParty])

    return (
    <ConfettiContext.Provider value={value}>
        {children}
    </ConfettiContext.Provider>
    )
};

export function useConfettiContext() {
    const partyContext = useContext(ConfettiContext)

    return partyContext;
}