import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/google-icon.png';
import './Registration.css';


const Registration = () => {
    const navigate = useNavigate();

    const loginNavigate = () =>{
        navigate("/login")
    }
    return (
        <div className="container">
            <div className="w-50 mx-auto mt-4 form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                        <p className="ms-auto text-danger">Forgot Password?</p>
                    </Form.Group>
                    <Button variant="primary" className=" w-100" type="submit">
                        Create an account
                    </Button>
                    <p className="text-center mt-3">Already have an account? <span className="text-primary p-1" style={{cursor: "pointer"}} onClick={loginNavigate}>Login</span></p>
                </Form>
                <div className="d-flex justify-content-center">
                    <div style={{borderTop: "1px solid grey", width:"30%", marginTop:"15px"}}></div>
                    <div className="px-2">or</div>
                    <div style={{borderTop: "1px solid grey", width:"30%", marginTop:"15px"}}></div>
                </div>
                <div className="d-flex align-items-center google-authentication">
                    <img src={icon} alt="" />
                    <p className="mx-4">Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Registration;