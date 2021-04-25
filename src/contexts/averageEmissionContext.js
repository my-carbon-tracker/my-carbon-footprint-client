import React, { createContext, useState, useMemo, useContext} from 'react';
/* eslint-disable react/prop-types */

const AverageEmissionContext = createContext();

export const AverageEmissionProvider = ({ children }) => {
    const [compareToOthers, setCompareToOthers] = useState(); 
    
    const value = useMemo(() => ({compareToOthers, setCompareToOthers}), [compareToOthers, setCompareToOthers])

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