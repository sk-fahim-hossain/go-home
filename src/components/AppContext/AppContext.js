import React, { useState } from 'react';


const AppContext = React.createContext('');
    
const AppProvider = ({children}) => {
    const [location, setLocation] =useState({pickFrom:'', pickTo:''});
    const [vehicle,setVehicle] = useState("");
    return <AppContext.Provider value={{location,setLocation,vehicle,setVehicle}}>{children}</AppContext.Provider>
};

export {AppContext, AppProvider};