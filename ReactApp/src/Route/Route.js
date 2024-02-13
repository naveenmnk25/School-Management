import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PathConstants } from './path-constants';
import Home from '../components/basicComponent/Home';
import Register from '../components/basicComponent/Register';
import BoardUser from '../components/basicComponent/BoardUser';
import RegistrationPage from '../components/loginComponents/Registration';
import AdmissionPage from '../components/loginComponents/Admission';
import LoginHomePage from '../components/loginComponents/LoginHome';
import Login from '../components/loginComponents/Login';

const Routers = ({  }) => {
   return (
        <Routes>
            <Route path="/" element={<LoginHomePage />} />
            <Route path={PathConstants.HOME} element={<Home />} />
            <Route path={PathConstants.REGISTER} element={<Register />} />
            <Route path={PathConstants.USER} element={<BoardUser />} />
             <Route path={PathConstants.SMLOGINHOME} element={<LoginHomePage />} >
              <Route index element={<Login />} />
              <Route path={PathConstants.SMADMISSION} element={<AdmissionPage />} />
              <Route path={PathConstants.SMREGISTRATION} element={<RegistrationPage />} />
              <Route path={PathConstants.SMLOGIN} element={<Login />} />
            </Route>
        </Routes>
    );
};

export default Routers;