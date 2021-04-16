
import { createContext, useState, useMemo, useContext} from 'react';

const AverageEmissionContext = createContext();

export const AverageEmissionProvider = ({ children }) => {
    const [totalEmissions, setTotalEmissions] = useState(); 
    
    const value = useMemo(() => ({totalEmissions, setTotalEmissions}), [totalEmissions, setTotalEmissions])

    return (
    <AverageEmissionContext.Provider value={value}>
        {children}
    </AverageEmissionContext.Provider>
    )
};

export function useAverageEmissionContext() {
    const avgContext = useContext(AverageEmissionContext)

    return avgContext;
}