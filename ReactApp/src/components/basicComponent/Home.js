import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";

const Home = () => {
  const [content, setContent] = useState("Hello");

  useEffect(() => {
    // UserService.getPublicContent().then(
    //   (response) => {
    //     setContent(response.data);
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response && error.response.data) ||
    //       error.message ||
    //       error.toString();

    //     setContent(_content);
    //   }
    // );
  }, []);

  return (
   <>
   </>
  );
};

export default Home;
