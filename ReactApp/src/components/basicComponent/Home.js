import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../slices/auth";
import eventBus from "../../common/EventBus";
import { PathConstants } from "../../Route/path-constants";

const Home = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
 
 
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (!currentUser) {
    return <Navigate to={PathConstants.SMLOGIN} />;
  }

  return (
   <>
   <div>
    <h1>Welcome {currentUser.username} !!!!!</h1>
   </div>
   <a href={PathConstants.SMLOGIN} className="nav-link" onClick={logOut}>
                  LogOut
                </a>
   </>
  );
};

export default Home;
