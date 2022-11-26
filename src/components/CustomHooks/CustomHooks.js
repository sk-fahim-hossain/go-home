
import { useState } from 'react';

const CustomHooks = () => {

    const [vehicle ,setVehicle] = useState("");
    const [location, setLocation] = useState({})

    return {vehicle,
         setVehicle,
         location,
         setLocation,
        };
}

export default CustomHooks;
