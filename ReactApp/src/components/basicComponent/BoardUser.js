import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

const BoardUser = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
        console.log(content);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
         <div className="container">
      <div className="row">
         <div className="container">
      <h1>User List</h1>

      <div className="row">
        {content.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">ID: {user.id}</p>
                <p className="card-text">Role: {user.userRole}</p>
                {/* Add more card text for other user information */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
      </header>
    </div>
  );
};

export default BoardUser;
