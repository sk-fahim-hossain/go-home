import React from 'react';
import './DriverCard.css'
import UserImg from '../assets/images/peopleicon.png'

const DriverCard = ({ vehicle, detail }) => {
    const { person, price, img } = detail;

    return (
        <div className="item  bg-light">
            <div className="driver-card">
                <img src={img} alt="" className="p-2" height={50} width={50} />
                {/* <span className="m-1">{vehicle}</span> */}
                <span className='person-wrapper'><img src={UserImg} width={30} height={30} alt="" />{person}</span>
                <span className="m-4">{price}</span>
            </div>
        </div>
    );
};


export default DriverCard;