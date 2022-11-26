import React, { useContext, useEffect, useState } from 'react';
import mapImage from '../../images/Map.png';
import { AppContext } from '../AppContext/AppContext';
import DriverCard from '../DriverCard/DriverCard';
import carImg from '../../images/Frame-2.png';
import bikeImg from '../../images/Frame.png';
import busImg from '../../images/Frame-1.png';
import trainImg from '../../images/Frame-3.png';
import './Proceed.css';

const Proceed = () => {
    const { location, vehicle } = useContext(AppContext);
    const [driverDetails, setDriverDetails] = useState([]);

    const bikeDetails = [
        {
            "person": "1",
            "img": bikeImg,
            "price": "$220"
        },
        {
            "person": "1",
            "img": bikeImg,
            "price": "$230"
        },
        {
            "person": "1",
            "img": bikeImg,
            "price": "$200"
        },
        {
            "person": "1",
            "img": bikeImg,
            "price": "$225"
        }
    ]
    const carDetails = [
        {
            "person": "3",
            "img": carImg,
            "price": "$300"
        },
        {
            "person": "3",
            "img": carImg,
            "price": "$310"
        },
        {
            "person": "3",
            "img": carImg,
            "price": "$350"
        },
        {
            "person": "3",
            "img": carImg,
            "price": "$320"
        },
    ]
    const trainDetails = [
        {
            "person": "2",
            "img": trainImg,
            "price": "$100"
        },
        {
            "person": "3",
            "img": trainImg,
            "price": "$150"
        },
        {
            "person": "4",
            "img": trainImg,
            "price": "$200"
        },
        {
            "person": "1",
            "img": trainImg,
            "price": "$50"
        },
    ]
    const busDetails = [
        {
            "person": "2",
            "img": busImg,
            "price": "$100"
        },
        {
            "person": "3",
            "img": busImg,
            "price": "$150"
        },
        {
            "person": "4",
            "img": busImg,
            "price": "$200"
        },
        {
            "person": "1",
            "img": busImg,
            "price": "$50"
        },
    ]

    useEffect(() => {
        if (vehicle === "bike") {
            setDriverDetails(bikeDetails);
        }
        else if (vehicle === "train") {
            setDriverDetails(trainDetails);
        }
        else if (vehicle === "car") {
            setDriverDetails(carDetails);
        }
        else {
            setDriverDetails(busDetails);
        }

    }, [vehicle])



    return (
        <div className="container">
            <hr />
            <div className="">
                <div className="col-md-3 col-sm-6 p-4 mx-3 m-4 float-start destination-form">
                    <div className="bg-primary p-2 location-board">
                        <ul style={{ textTransform: "uppercase" }}>
                            <li><h5>{location.pickingLocation}</h5></li>
                            <li><h5>{location.pickingToLocation}</h5></li>
                        </ul>
                    </div>

                    {
                        driverDetails.map(detail => <DriverCard detail={detail} vehicle={vehicle}></DriverCard>)
                    }
                </div>

                <div className="col-md-8  col-sm-6 m-4 map float-end">
                    <img src={mapImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Proceed;