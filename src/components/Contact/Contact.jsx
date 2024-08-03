import React from 'react';
import './Contact.css'

const Contact = () => {
    const handleMessage = () => {
        alert( 'Your message send successfully !')
    }
    return (
        <div className="container-fluid contact-page">
           
            <div className='container pt-5'>
                <div className="col-md-7 col-lg-8 bg-light  p-4 rounded">
                    <h4 className="mb-3">Contact</h4>
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3">


                            <div className="col-12">
                                <label for="username" className="form-label float-start">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control " id="username" placeholder="Username" required=""></input>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label float-start">Email <span className="text-muted"></span></label>
                                <input type="email" className="form-control " id="email" placeholder="you@example.com"></input>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label float-start">Message</label>
                                <input type="text" className="form-control" id="address" placeholder="Your message" required=""></input>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                        </div>

                        <button className="w-100 btn btn-primary btn-lg mt-3" type="submit" onClick={handleMessage}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;