import React, { useContext, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import mapImage from '../../images/Map.png';
import './Destination.css';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../AppContext/AppContext';


const Destination = () => {
    const {setLocation,vehicle} = useContext(AppContext);

    const navigate = useNavigate();
    const pickFromRef = useRef("");
    const pickToRef = useRef("");

    const handleLocation = (e) => {
        e.preventDefault();
        const pickingLocation = pickFromRef.current.value;
        const pickingToLocation = pickToRef.current.value;
        const locations = { pickingLocation, pickingToLocation }

        setLocation(locations)
        navigate('/proceed')
    }

    return (
        <div className="container">
            <hr />
            <div className="">
                <div className="col-md-3 col-sm-6 p-4 mx-3 m-4 float-start destination-form">
                    <Form onSubmit={handleLocation} className="destination-form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pick From</Form.Label>
                            <Form.Control ref={pickFromRef} name="pickFrom" type="text" placeholder="From" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Pick To</Form.Label>
                            <Form.Control type="text" name="pickTo" ref={pickToRef} placeholder="To" />
                        </Form.Group>
                        <Button variant="primary" className="w-100" type="submit">
                            <Link to="/proceed" style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
                        </Button>
                    </Form>
                </div>
                <div className="col-md-8  col-sm-6 m-4 map float-end">
                    <img src={mapImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Destination;