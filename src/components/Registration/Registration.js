import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/google-icon.png';
import './Registration.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../config.firebseInit';
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';


const Registration = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [updateProfile, updating, errorName] = useUpdateProfile(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName:name})
        if(errorName){
            console.log(errorName)
        }
    }
    const loginNavigate = () =>{
        navigate("/login")
    }
    const handleGoogle =()=>{
        signInWithGoogle();
    }
    console.log(user)
    return (
        <div className="container">
            <div className="w-50 mx-auto mt-4 form">
                <Form onSubmit={handleSubmit} > 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
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
                <div className="d-flex align-items-center google-authentication" onClick={handleGoogle}>
                    <img src={icon} alt="" />
                    <p className="mx-4">Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Registration;