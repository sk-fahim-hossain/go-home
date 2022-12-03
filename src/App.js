import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import Destination from './components/Destination/Destination';
import Proceed from './components/Proceed/Proceed';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {


  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/*" element={<RequireAuth />}>
          <Route path="destination" element={<Destination></Destination>}></Route>
        </Route>
        <Route path="/proceed" element={<Proceed></Proceed>}></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
