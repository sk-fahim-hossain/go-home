import React, { useRef } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../images/google-icon.png';
import { useSignInWithGoogle,useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import auth from './../../config.firebseInit';




const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        userLogin,
        loadingLogin,
        errorLogin,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    // const location = useLocation();
    // const history = useLocation();
    // const from = location?.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passRef = useRef('');

    const registrationNavigate = () =>{
        navigate("/registration")
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email,password);


    }
    const handleGoogle =()=>{
        signInWithGoogle()
        // .then(()=>{
        //     navigate(from);
        // })
    }
    // if (user) {
    //     // not logged in so redirect to login page with the return url
    //     return <Navigate state={{ from: history.location }} />
    // }
    return (
        <div className="container">
            <div className="w-50 mx-auto mt-4 form">
                <Form onSubmit={handleLogin}>
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
                    <Button variant="primary" className="w-100" type="submit">
                        Login
                    </Button>
                    <p className="text-center mt-3">Don't have any account? <span className="text-primary" style={{cursor: "pointer"}} onClick={registrationNavigate}>Create an account</span></p>
                </Form>
                <div className="d-flex align-items-center google-authentication" onClick={handleGoogle}>
                    <img src={icon} alt="" />
                    <p className="mx-4">Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;