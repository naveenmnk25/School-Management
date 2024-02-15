import React, {   } from "react";
import { PathConstants } from "../../Route/path-constants";
import {
  NavLink,
  Outlet
} from "react-router-dom";
import "./Login.css";


const LoginHomePage = () => {
  
  return (
   <>
   <div className="container">
    <div className="row h100vh">
      <div className="col-12">
      </div>
      <div className="col-12">
         < div className = "row LCard nav-css" >
          <div className="col-4 nav-css">
            <div className="linkcss"> 
            < span>
             < NavLink to = { PathConstants.SMLOGIN} className = "nav-link"activeClassName = "active-link" >
               LOGIN 
               </NavLink></span>
               < span >
               < NavLink to = {PathConstants.SMREGISTRATION} className = "nav-link" activeClassName = "active-link" >
                 rr 
                 </NavLink> 
                 </span>
                 < span >
                 <NavLink to = {PathConstants.SMADMISSION} className = "nav-link"activeClassName = "active-link" >
                 ad </NavLink>
                 </span>
            </div> 
          </div>
          <div className="col-8 render-css">
            <Outlet />
          </div>
         </div>
      </div>
    </div>
   </div>
   </>
  );
};

export default LoginHomePage;









{/* <Link to={PathConstants.SMLOGIN} className="nav-link">
                  LOGIN
                </Link>
   <Link to={PathConstants.SMREGISTRATION} className="nav-link">
                  REGISTRATION
                </Link>
<Link to={PathConstants.SMADMISSION} className="nav-link">
                  ADMISSION
                </Link> */}

//    <Outlet />