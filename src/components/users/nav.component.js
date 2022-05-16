import React,{ Component } from "react";
import {Link} from  "react-router-dom";

export default class Nav extends Component{

    render(){
        return(
        <nav className="navbar navbar-expand  navbar-light ">
            <div className="container">
                <Link to={"/home"} className="navbar-brand">Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
   
}