import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login, register } from "../../slices/auth";
import { clearMessage, setMessage } from "../../slices/message";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    password: "",
    role: "User",
  };
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/home");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        setTimeout(() => {
          dispatch(setMessage(message));
        }, 4000);
      });
  };
  const handleRegister = (formValue) => {
    const { username, password, role } = formValue;
    setLoading(true);

    dispatch(register({ username, password, role }))
      .unwrap()
      .then(() => {
        setLoading(false);
        //navigate("/home");
        //window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        setTimeout(() => {
          dispatch(setMessage(message));
        }, 4000);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="col-md-12 login-form">
      <div className="row">
        <div className="col">
          <div class="container">
            {showLoginForm ? (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form>
                  <div className="card">
                    <div className="row">
                      <div className="col-6">
                        <div className="inputBox">
                          <Field
                            type="text"
                            name="username"
                            placeholder="Username"
                          />
                          <span>Username</span>
                          {/* <ErrorMessage
                          name="username"
                          component="p"
                          className="alert alert-danger"
                        /> */}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="inputBox">
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                          <span>Password</span>
                          {/* <ErrorMessage
                          name="password"
                          component="p"
                          className="alert alert-danger"
                        /> */}
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-center mt-3">
                        <button
                          type="submit"
                          className="enter"
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span> Login</span>
                        </button>
                      </div>
                      <div className="col-12 d-flex justify-content-center mt-1">
                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                              {message} !
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button type="button" onClick={toggleLoginForm}>
                      Show Register
                    </button>
                  </div>
                </Form>

              </Formik>

            ) : (<Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleRegister}
            >
              <Form>
                <div className="card">
                  <div className="row">
                    <div className="col-6">
                      <div className="inputBox">
                        <Field
                          type="text"
                          name="username"
                          placeholder="Username"
                        />
                        <span>Username</span>
                        {/* <ErrorMessage
                          name="username"
                          component="p"
                          className="alert alert-danger"
                        /> */}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="inputBox">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                        <span>Password</span>
                        {/* <ErrorMessage
                          name="password"
                          component="p"
                          className="alert alert-danger"
                        /> */}
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                      <button
                        type="submit"
                        className="enter"
                        disabled={loading}
                      >
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span> Register</span>
                      </button>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-1">
                      {message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {message} !
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="">
                  <button type="button" onClick={toggleLoginForm}>
                    Show Login
                  </button>
                </div>
              </Form>
            </Formik>)}



          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
