

import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from './../../../config.firebseInit';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    //     const [user, loading, error] = useAuthState(auth);
    //     const [signOut, errorSignOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">GoHome</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/destination" className="nav-link ">Destination</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/blog" className="nav-link active">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/contact" className="nav-link active">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>



        </div >
    );
};

export default Header;