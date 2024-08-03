import React, { useContext, useEffect, useRef, useState } from 'react';
import mapImage from '../../assets/images/Map.png'
import './Destination.css';
import { useNavigate, useParams } from 'react-router-dom';
import { bikeDetails, busDetails, carDetails, trainDetails } from '../../../Data';
import DriverCard from '../DriverCard';




const Destination = () => {
    const { vehicle } = useParams()
    const [location, setLocation] = useState({})
    const [riders, setRiders] = useState([])
    const [show,setShow] = useState(false)

    useEffect(() => {
        const busRiders = busDetails
        const bikeRiders = bikeDetails
        const carRiders = carDetails
        const trainRiders = trainDetails
        if (vehicle == 'bike') {
            setRiders(bikeRiders)
        }
        if (vehicle == 'bus') {
            setRiders(busRiders)
        }
        if (vehicle == 'train') {
            setRiders(trainRiders)
        }
        if (vehicle == 'car') {
            setRiders(carRiders)
        }

    }, [vehicle])

    const handleLocation = (e) => {
        e.preventDefault();
        const form = e.target
        const pickingLocation = form.pickupLocation.value;
        const destination = form.desLocation.value;
        const locations = { pickingLocation, destination }
        setLocation(locations)
        setShow(true)
        form.reset()
    }

    console.log(location)

    return (
        <div className="container">

            <div className="grid gap-2 mt-4">
                <div className="col-md-4  p-4 mt-2  float-start    ">
                    <form onSubmit={handleLocation} className="destination-form location-form p-3">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Pickup Location</label>
                            <input type="text" name='pickupLocation' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Your Destination</label>
                            <input type="text" name='desLocation' className="form-control" id="exampleInputPassword1"></input>
                        </div>

                        <button type="submit" className="btn btn-primary">Search Rider</button>
                    </form>


                    {show &&
                        <div className=" mt-2  float-start destination-form location-form  " style={{width:'100%'}}>
                            <div className="col-md-3 col-sm-6 p-4  float-start destination-form">
                                <div className=" location-board">
                                    <ul style={{ textTransform: "uppercase" }}>
                                        <li><h5>{location.pickingLocation}</h5></li>
                                        <li><h5>{location.destination}</h5></li>
                                    </ul>
                                </div>

                                {location &&
                                    riders.map(detail => <div className='bg-light'><DriverCard detail={detail} vehicle={vehicle}></DriverCard></div>)
                                }
                            </div>

                        </div> 
                    }

                </div>

                <div className="col-md-8  p-2 map float-end">
                    <img src={mapImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;