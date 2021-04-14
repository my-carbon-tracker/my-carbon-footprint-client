import { createContext, useState, useMemo} from 'react';

export const OffsetContext = createContext();

export const OffsetProvider = ({ children }) => {
    const [totalOffset, setTotalOffset] = useState("0"); 
    const value = useMemo(() => ([totalOffset, setTotalOffset]), [totalOffset, setTotalOffset])

    return (
    <OffsetContext.Provider value={value}>
        {children}
    </OffsetContext.Provider>
    )
};