import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import {Link} from  "react-router-dom";
import Login from "./Login";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailErr,setEmailErr]=useState(false);

  let history = useHistory();

  const forgot = async (event) => {
  

    event.preventDefault();
    console.log("dsdasdaslogin");
    const data = {
      email,
    };
    /*let url = "http://192.168.43.151:8000/api/login";
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
    else {

    }
    */
   axios.post("/login",data)
      .then(res =>{
       localStorage.setItem("token", res.data.token);
      })
      .catch(err=>{
        console.log(err)
      })
  };
  function emailHandler(e){
    let item=e.target.value;
    let pattern=/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z\-]{3,9}[\.][a-z]{2,5}/g;
    if(pattern.test(item))
    {
      setEmailErr(false)
    }
    else {
        setEmailErr(true)
    }
   }

  /*useEffect(() => {
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
  }, []);*/
  return (
    <div className="container  " >
      <div className="row justify-content-center">
        
        <div className="col-lg-6 bg-white content-center">
          <div className="p-5">
            <div className="text-center">
              <h4 className="text-dark mb-4">Forgot your password?</h4>
               <p> Please enter your email and we'll send you a link to get back to your account.</p>
            </div>
            <form className="user" onSubmit={forgot}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-user"
                  type="email"
                  id="username-1"
                  placeholder="Enter Your Email..."
                  name="email"
                  required
                  onChange={emailHandler}
                  />            {emailErr? <span>It should be a valid email address!</span>:""}
                  
              </div>
              <button
                className="btn btn-primary d-block btn-user"
                type="submit"
              >
                Send
              </button>
              <hr />
            </form>
            <div className="text-center">
              <Link className="small" to={"/login"}>
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

export default ForgotPassword;