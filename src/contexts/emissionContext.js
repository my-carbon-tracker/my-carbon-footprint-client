import React, { createContext, useState, useMemo, useContext} from 'react';
/* eslint-disable react/prop-types */

const EmissionContext = createContext();

export const EmissionProvider = ({ children }) => {
    const [totalEmission, setTotalEmission] = useState();   
    const value = useMemo(() => ({totalEmission, setTotalEmission}), [totalEmission, setTotalEmission])

    return (
    <EmissionContext.Provider value={value}>
        {children}
    </EmissionContext.Provider>
    )
};

export function useEmissionContext() {
    const emissionContext = useContext(EmissionContext)

    return emissionContext;
}