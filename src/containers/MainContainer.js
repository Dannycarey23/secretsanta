import React from 'react';
import './MainContainer.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Register from '../components/Register';
import Login from '../components/Login';

const MainContainer = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={< Homepage />}/>
                <Route path ='/registration' element={< Register />}/>
                <Route path ='/login' element={< Login />}/>
            </Routes>
        </Router>
    )
}

export default MainContainer;
