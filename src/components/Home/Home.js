import React, { createContext, useContext } from 'react';
import './Home.css';
import frame1 from '../../images/Frame.png'
import frame2 from '../../images/Frame-1.png'
import frame3 from '../../images/Frame-2.png'
import frame4 from '../../images/Frame-3.png'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';




const Home = () => {
   const contextData = useContext(AppContext);
   const {setVehicle} = contextData;
    const navigate = useNavigate();

    const handleVehicle = (vehicle) => {
        setVehicle(vehicle);
        navigate("/destination");
    }
    return (
        <div className="home-page">
            <div className="container">
               <div className="row frame-row justify-content-center text-center"  >
               <div className="col-md-2 frame m-1" onClick={()=> handleVehicle("bike")}>
                    <img src={frame1} alt="" srcset="" />
                    <h5>Bike</h5>
                </div>
                <div className="col-md-2 frame m-1" onClick={()=> handleVehicle("car")}>
                    <img src={frame3} alt="" srcset="" />
                    <h5>Car</h5>
                </div>
                <div className="col-md-2 frame m-1" onClick={()=> handleVehicle("bus")}>
                    <img src={frame2} alt="" srcset="" />
                    <h5>Bus</h5>
                </div>
                <div className="col-md-2 frame m-1" onClick={()=>handleVehicle("train")}>
                    <img src={frame4} alt="" srcset="" />
                    <h5>Train</h5>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Home;