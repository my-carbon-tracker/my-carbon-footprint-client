import { createContext, useState} from 'react';
// import React from "react";

export const AverageEmissionContext = createContext();

export const AverageEmissionProvider = ({ children }) => {
    const [totalEmissions, setTotalEmissions] = useState(); 

    return <AverageEmissionContext.Provider value={{ totalEmissions, setTotalEmissions }}>
        {children}
    </AverageEmissionContext.Provider>
};
