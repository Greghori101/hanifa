import React, { Component , useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import {Link} from  "react-router-dom";
import { render } from "@testing-library/react";

function ResetPassword(){
  
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  

  let history = useHistory();
  const Reset = async (event) => {
    
    event.preventDefault();
    console.log("dsdasdaslogin");
    const data = {
      newPassword,
      confirmNewPassword,
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 bg-white content-center">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Reset Password!</h4>
            </div>
            <form className="user" onSubmit={Reset}>
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <input
                  className="form-control form-control-user"
                  type="password"
                  id="exampleInputPassword-1"
                  placeholder="Enter Your New password..."
                  name="newPassword"
                  required
                  onChange={(event) => {
                    newPassword(event.target.value);}}
                 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm New Password</label>
                <input
                  className="form-control form-control-user"
                  type="password"
                  id="exampleInputPassword-1"
                  placeholder="Confirm Your New password..."
                  name="confirmPassword"
                  required
                  onChange={(event) => {
                    confirmNewPassword(event.target.value);}}
                  
                />
              </div>
               <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className=" btn btn-primary d-md-block  btn-user2 "
                type="submit"
              >
                Confim changes
              </button>
              </div>
              <hr />
            </form>
            <div className="text-center">
              <Link className="small" to={"/home"}>
              Go back to login page
              </Link>
            </div>
            <div className="text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  ResetPassword;