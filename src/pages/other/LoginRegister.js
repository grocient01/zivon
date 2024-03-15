import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { api } from "../../API/config";
import { verifyToken } from "../../API/api";

const LoginRegister = () => {
  let { pathname } = useLocation();

  const[formError,setFormError] = useState()
  const[loginFormError, setLoginFormError] = useState() 
  const[loggining, setLoggining] = useState(false)
  const[isCreating, setCreating] = useState(false)
  const[isOtp, setOtp] = useState(false)
  const[isOtpVerifing, setOtpVerifing] = useState(false)
  const token = sessionStorage.getItem("token")

  const [user, setUser] = useState({
    email: "",
    fullname: "",
    mobile: "",
    password: "",
  });

  const[otpValue,setOtpValue] = useState({
    otp: ""
  })

  const[loginUser,setLoginUser] = useState({
    loginemail:"",
    loginpassword:""
  })

  const registerUser = async(e)=>{
    e.preventDefault();
    setCreating(true)
    if (user.password.length < 6) {
      setFormError("Password should be more then 6 letters");
      setCreating(false);
      return;
    } 
    else if (user.email === "") {
      setFormError("Email required");
      setCreating(false);
      return;
    } else if (user.fullname === "" || user.fullname.length < 3) {
      setFormError("Name required");
      setCreating(false);
      return;
    } else if (user.mobile === "" || user.mobile.length < 10) {
      setFormError("Mobile number required");
      setCreating(false);
      return;
    }

    try {
      await fetch(`${api.API_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.fullname,
          mobile: user.mobile,
          email: user.email,
          password: user.password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setFormError("Something went wrong.");
            setCreating(false);
          }
          return response.json();
        })
        .then((response) => {
          if (response.code === 201) {
            setCreating(false);
            setOtp(true)
            // window.location.href = "/home"
            console.log(response.message)
          }
          setFormError("Otp Sent to your Email.");
          setCreating(false);
        })
        .catch((error) => {
          setFormError("There was an error with the fetch operation:");
          setCreating(false);
        });
    } catch (error) {
      setFormError("There was an error with the fetch operation:");
      setCreating(false);
    }
  }

  const verifyOtp = async(e)=>{
    e.preventDefault()
    setOtpVerifing(true)
    if(otpValue.otp.length < 4){
      setFormError("Please enter Valid Otp")
      setOtpVerifing(false)
      return
    }
    try {
      await fetch(`${api.API_URL}/user/otp-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          otp: otpValue.otp,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setFormError("Something went wrong.");
            setOtpVerifing(false);
          }
          return response.json();
        })
        .then((response) => {
          if (response.code === 200) {
            setOtpVerifing(false);
            window.location.href = "/login-register"
            console.log(response.message)
          }
          setFormError(response.message);
          setOtpVerifing(false);
        })
        .catch((error) => {
          setFormError("There was an error with the fetch operation:");
          setOtpVerifing(false);
        });
    } catch (error) {
      
    }
  }

  const userLoginForm =async(e)=>{
    e.preventDefault()
    setLoggining(true)
    if(loginUser.loginpassword.length < 6){
      setLoginFormError("Please enter valid Password")
      setLoggining(false)
      return;
    } else if(loginUser.loginemail.length < 10){
      setLoginFormError("Please enter valid Email")
      setLoggining(false)
      return;
    }

    try {
      await fetch(`${api.API_URL}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginUser.loginemail,
          password: loginUser.loginpassword,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            setFormError("Something went wrong.");
            setLoggining(false);
          }
          return response.json();
        })
        .then((response) => {
          if (response.code === 200) {
            setLoggining(false);
            sessionStorage.setItem("token" , response.token)
            window.location.href = "/"
            console.log(response.message)
          }
          setLoginFormError(response.message)
          setLoggining(false)

        })
        .catch((error) => {
          setLoginFormError("There was an error with the fetch operation:");
          setLoggining(false);
        });
    } catch (error) {
      setLoginFormError("Something went wrong");
      setLoggining(false);
    }


  }

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDataChange2 = (e) =>{
    const { name, value } = e.target;
    setOtpValue({...otp, [name] : value})
  }

  const handleLoginDataChange = (e) =>{
    const { name, value } = e.target;
    setLoginUser({...loginUser, [name] : value})

  }

  const { email, fullname, mobile, password } = user;
  const { otp } = otpValue;
  const {loginemail, loginpassword} = loginUser;


  useEffect(()=>{
    const checkToken = async () => {
      try {
          const isUserLoggedIn = await verifyToken();
          if (isUserLoggedIn) {
              window.location.href = "/"
          } else {
              
          }
      } catch (error) {
          console.error('Error while verifying token:', error);
      }
  };

  checkToken();
  },[token])

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of ZIVON react minimalist eCommerce template."
      />
      <LayoutOne >
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Login Register", path: process.env.PUBLIC_URL + pathname }
          ]} 
        /> */}
        <div className="login-register-area pt-60 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <h5 style={{color:"red"}}> {loginFormError} </h5>
                            <form onSubmit={userLoginForm}>
                              <input
                                type="text"
                                name="loginemail"
                                placeholder="Email"
                                value={loginemail}
                                onChange={handleLoginDataChange}
                              />
                              <input
                                type="password"
                                name="loginpassword"
                                placeholder="Password"
                                value={loginpassword}
                                onChange={handleLoginDataChange}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={ "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span> {loggining ? "Processing" : "Login"} </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <h5 style={{color:"red"}}> {formError} </h5>
                            {isOtp ? (
                              <form onSubmit={verifyOtp}>
                                <input
                                  type="number"
                                  name="otp"
                                  placeholder="OTP"
                                  value={otp}
                                  onChange={handleDataChange2}
                                />
                                <div className="button-box">
                                  <button type="submit">
                                    <span> {isOtpVerifing ? "Processing..." : "Submit"} </span>
                                  </button>
                                </div>
                              </form>
                            ) : (
                              <form onSubmit={registerUser}>
                              <input
                                  type="text"
                                  name="fullname"
                                  placeholder="Name"
                                  value={fullname}
                                  onChange={handleDataChange}
                                />
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={handleDataChange}
                                />
                                <input
                                  name="mobile"
                                  placeholder="Mobile"
                                  type="number"
                                  value={mobile}
                                  onChange={handleDataChange}
                                />
                                <input
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={handleDataChange}
                                />
  
                                <div className="button-box">
                                  <button type="submit">
                                    <span> {isCreating ? "Processing..." : "Register"} </span>
                                  </button>
                                </div>
                              </form>
                            )}
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
