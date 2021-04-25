import React, { createContext, useState, useMemo, useContext} from 'react';
/* eslint-disable react/prop-types */

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(); 
    
    const value = useMemo(() => ({location, setLocation}), [location, setLocation])

    return (
    <LocationContext.Provider value={value}>
        {children}
    </LocationContext.Provider>
    )
};

export function useLocationContext() {
    const locContext = useContext(LocationContext)

    return locContext;
}