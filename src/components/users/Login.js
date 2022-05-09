import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const login = async (event) => {
    event.preventDefault();
    console.log("dsdasdaslogin");
    const data = {
      email,
      password,
    };
    let url = "http://192.168.43.151:8000/api/login";
    let options = {
      method: "POST",
      data,
      url: url,
      headers: {
        Accept: "Application/json",
      },
    };
    let response = await axios(options);
    console.log(response);
    if (response && response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user" , response.data.user);
      let bodyElement = document.getElementsByTagName("body")[0];
      document. body. classList.remove("bg-image");
      history.push("/");
    }
  };

  useEffect(() => {
      let token = localStorage.getItem("token");
      if (token){
          //alert("");
          let bodyElement = document.getElementsByTagName("body")[0];
            document. body. classList.remove("bg-image");
          history.push("/");
      }else{
    let bodyElement = document.getElementsByTagName("body")[0];
    document. body. classList. add( "bg-image");

      }
  }, []);
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-lg-6 d-none d-lg-flex">
          <div className="flex-grow-1 bg-login-image">
            <img
              className="logo"
              src={window.location.origin + "/assets/img/EsiProject-logo.png"}
            />
          </div>
        </div>
        <div className="col-lg-6 bg-white content-center">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Get Started!</h4>
            </div>
            <form className="user" onSubmit={login}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-user"
                  type="email"
                  id="username-1"
                  placeholder="Enter Your Email..."
                  name="email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-user"
                  type="password"
                  id="exampleInputPassword-1"
                  placeholder="Enter Your Password..."
                  name="password"
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <button
                className="btn btn-primary d-block btn-user"
                type="submit"
              >
                Login
              </button>
              <hr />
            </form>
            <div className="text-center">
              <a className="small" href="forgot-password.html">
                Forgot Password?
              </a>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
