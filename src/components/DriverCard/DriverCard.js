
import React from 'react';
import carImg from '../../images/Frame-2.png'
import './DriverCard.css';


const DriverCard = ({vehicle, detail}) => {
    const {person,price,img} = detail;

    return (
        <div className="item my-2 bg-light">
            <div className="driver-card p-3">
            <img src={img} alt="" className="p-2" />
                <span className="m-1">{vehicle}</span>
                <span><i class="fa-solid fa-user-group"></i>{person}</span>
                <span className="m-4">{price}</span>
            </div>
        </div>
    );
};

export default DriverCard;