import React, { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../slices/auth";
import eventBus from "../../common/EventBus";
import { PathConstants } from "../../Route/path-constants";
import "./home.css";

const Home = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      const handleArrowClick = (e) => {
        let arrowParent = e.target.parentElement.parentElement; // selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      };

      const arrowElements = document.querySelectorAll(".arrow");
      arrowElements.forEach((arrow) => {
        arrow.addEventListener("click", handleArrowClick);
      });

      const sidebar = document.querySelector(".sidebar");
      const sidebarBtn = document.querySelector(".bx-menu");

      const handleSidebarBtnClick = () => {
        sidebar.classList.toggle("close");
      };

      sidebarBtn.addEventListener("click", handleSidebarBtnClick);

      // Cleanup event listeners when the component unmounts
      return () => {
        arrowElements.forEach((arrow) => {
          arrow.removeEventListener("click", handleArrowClick);
        });

        sidebarBtn.removeEventListener("click", handleSidebarBtnClick);
      };
    }
  }, []);
  console.log(currentUser);
  if (!currentUser) {
    return <Navigate to={PathConstants.SMLOGIN} />;
  }

  return (
    <>
      <div className="sidebar close">
        <div className="logo-details">
          <span className="logo_name">Menu</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i class="icon-home"></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="icon-home"></i>
              <span className="link_name">Admission</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Admission
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-bulb"></i>
                <span className="link_name">Class</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Class
                </a>
              </li>
               <li>
                <a href="#">Class</a>
              </li>
              <li>
                <a href="#">Class Routine</a>
              </li>
              <li>
                <a href="#">Virtual Classroom</a>
              </li>
              <li>
                <a href="#">Subject</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-news"></i>
                <span className="link_name">Users</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Users
                </a>
              </li>
              <li>
                <a href="#">Student</a>
              </li>
              <li>
                <a href="#">Teacher</a>
              </li>
              <li>
                <a href="#">Support Staff</a>
              </li>
              <li>
                <a href="#">Parent</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="#">
                <i className="bx bx-file-find"></i>
                <span className="link_name">Student Evaluation</span>
              </a>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Student Evaluation
                </a>
              </li>
              <li>
                <a href="#">Exam</a>
              </li>
              <li>
                <a href="#">Exam Hall</a>
              </li>
              <li>
                <a href="#">Manage Marks</a>
              </li>
               <li>
                <a href="#">Grade</a>
              </li>
               <li>
                <a href="#">Migration</a>
              </li>
            </ul>
          </li>

          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img
                  src="https://sachinsamal.netlify.app/static/media/sachin-samal.d451ea9b3c53ed984bf7.png"
                  alt="profileImg"
                />
              </div>
              <div className="name-job">
                <div className="profile_name">{currentUser.username}</div>
                <div className="job">{currentUser.role}</div>
              </div>
              <i className="bx bx-log-out" onClick={logOut}>
                LogOut
              </i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu">☰</i>
          <span className="text">Crypto App</span>
        </div>
      </section>
      {/* <a href={PathConstants.SMLOGIN} className="nav-link" onClick={logOut}>
                  LogOut
                </a> */}
    </>
  );
};

export default Home;
