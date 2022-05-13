import React, { useRef,useState,useEffect } from 'react';

import './Login.css';
import './Adduser.css';

import { useHistory } from "react-router-dom";
function Adduser(){
    
   
   const [firstname,setFirstname]=useState("")
   const [lastname,setLastname]=useState("")
   const [email,setEmail]=useState("")
   const [address,setAddress]=useState("")
   const [phone,setPhone]=useState("")
   const [role,setRole]=useState("")
   const [birthDate,setBirthDate]=useState("")
   const [placeOfBirth,setPlaceOfBirth]=useState("")
   const [gender,setGender]=useState("")

   const [firstnameErr,setfirstnameErr]=useState(false)
   const [lastnameErr,setlastnameErr]=useState(false)
   const [emailErr,setEmailErr]=useState(false)
   const [addressErr,setAddressErr]=useState(false)
   const [phoneErr,setPhoneErr]=useState(false)
    
   const [focused, setFocused] = useState(false);
   /* async*/ function adduser(e){
         
     e.preventDefault()

     /*  let item={firstname,lastname,email,address,phone,role,birthDate,placeOfBirth,gender}
       console.warn(item)
       let result= await fetch("http://localhost:8000/api/adduser",{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
           "Content-Type":'application/json',
           "Accept":'application/json'
        }
       })
       result = await result.json();
       console.warn("result",result)
       */
   }
   function firstnameHandler(e){
    let item=e.target.value;
    if(item.length<2)
    {
      setfirstnameErr(true)
    }
    else {
      setfirstnameErr(false)
    }
   }
   function lastnameHandler(e){
    let item=e.target.value;
    if(item.length<2)
    {
      setlastnameErr(true)
    }
    else {
      setlastnameErr(false)
    }
   }
   
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
   function phoneHandler(e){
    let item=e.target.value;
    let pattern=/^(00213|\+213|0)(5|6|7)[0-9]{8}$/g;
    if(pattern.test(item))
    {
      setPhoneErr(false)
    }
    else {
        setPhoneErr(true)
    }
   }
   function addressHandler(e){
    let item=e.target.value;
    let pattern=/^([^,]+),([^,]+),[^(]*/;
    if(pattern.test(item))
    {
      setAddressErr(false)
    }
    else {
        setAddressErr(true)
    }
   }
   
    return (
        <div className="container-fluid">
        <h3 className="text-dark mb-4">Users</h3>
        <div className="row mb-3">
            <div className="col">
                <div className="card shadow mb-3">
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Add user</p>
                    </div>
                    <div className="card-body">
                        <form onSubmit={adduser} >
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" >
                                            <strong>First Name</strong>
                                        </label>
                                        <input 
                                        name="firstName"
                                        className="form-control form-control-user" 
                                        type="text" 
                                        placeholder="Type first name" 
                                        required
                                        pattern= "^[A-Za-z0-9]{3,16}$"
                                        //value={firstname}
                                        onChange={firstnameHandler}
                                        />       {firstnameErr? <span>Invalid name!</span>:""}
                                        </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label" >
                                            <strong>Last Name</strong></label>
                                        <input 
                                        name="lastName" 
                                        className="form-control form-control-user" 
                                        type="text" 
                                        placeholder="Type last name" 
                                        required
                                       // value={lastname}
                                         onChange={lastnameHandler}
                                        />            {lastnameErr? <span>Invalid name!</span>:""}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Email </strong>
                                        </label>
                                        <input 
                                        name="email"
                                        className="form-control form-control-user"
                                        type="email" 
                                        placeholder="x.lastname@esi-sba.dz" 
                                        required
                                       // value={email}
                                        onChange={emailHandler}
                                        />            {emailErr? <span>It should be a valid email address!</span>:""}
                                         </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3"><label className="form-label" ><strong>Role</strong></label>
                                    <select className="form-select" onChange={(e)=>setRole(e.target.value)} defaultValue={role}>
                                          <optgroup id="role" label="Add a new :">
                                                <option>Student</option>
                                                <option>Company</option>
                                                <option>Teacher</option>
                                         </optgroup>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Address</strong>
                                        </label>
                                        <input 
                                        name="address"
                                        className="form-control form-control-user"
                                        type="text" 
                                        placeholder="eg:123 Main Street, Algiers, Algeria"
                                       // value={address}
                                       onChange={addressHandler}
                                       />            {addressErr? <span>Invalid address!</span>:""}
                                       </div>
                                </div>
                            </div>  
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Phone</strong>
                                        </label>
                                        <input 
                                        name="phone"
                                        className="form-control form-control-user"
                                        type="text" 
                                        placeholder="Format eg: 0213/+213/0--------"
                                        //value={phone}
                                        onChange={phoneHandler}
                                        />            {phoneErr? <span>Invalid phone number, please try again!</span>:""}

                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Birthday</strong>
                                        </label>
                                        <input 
                                        name="birthday"
                                        className="form-control form-control-user"
                                        type="date" 
                                        required
                                        value={birthDate}
                                        onChange={(e)=>setBirthDate(e.target.value)}
                                         />
                                        </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Place of birth</strong>
                                        </label>
                                        <input 
                                        name="Place of birth "
                                        className="form-control form-control-user"
                                        type="text" 
                                        placeholder="Mohammadia, Algiers, Algeria"
                                        //value={placeOfBirth} 
                                        onChange={(e)=>setPlaceOfBirth(e.target.value)}
                                         />
                                     </div>
                                </div>
                           </div>
                           <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label className="form-label">
                                            <strong>Gender</strong>
                                        </label>
                                        <select className="form-select" type="text" onChange={(e)=>setGender(e.target.value)} defaultValue={role}>
                                          <optgroup id="role">
                                                <option>Male</option>
                                                <option>Female</option>
                                         </optgroup>
                                        </select>
                                        </div>
                                </div>
                            </div>
                        </form><button className="btn btn-primary btn-sm" type="submit" >Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Adduser;
