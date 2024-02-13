import React, {   } from "react";
import { PathConstants } from "../../Route/path-constants";
import { Link, Outlet } from "react-router-dom";


const LoginHomePage = () => {
  
  return (
   <>
   <div className="container">
    <div className="row card p-5">
      <div className="col-12">
      </div>
      <div className="col-12">
         <div className="row">
          <div className="col-6">
            <Link to={PathConstants.SMLOGIN} className="nav-link">
                  LOGIN
                </Link>
   <Link to={PathConstants.SMREGISTRATION} className="nav-link">
                  REGISTRATION
                </Link>
<Link to={PathConstants.SMADMISSION} className="nav-link">
                  ADMISSION
                </Link>
          </div>
          <div className="col-6">
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