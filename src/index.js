import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./components/admin/Users";
import AddProject from "./components/projects/AddProject";
import SideNav from "./SideNav";
import Footer from "./Footer";
import Navabr from "./Navabr";
import Login from "./components/users/Login";
import Settings from "./components/admin/Settings";

ReactDOM.render(
	<div id="wrapper">
		<BrowserRouter>
			<Switch>
				<Route path="/admin/settings">
					<Settings/>
				</Route>
				<Route path="/login">
					<Login/>
				</Route>
				<Route path="/users">
					<SideNav />
					<div className="d-flex flex-column" id="content-wrapper">
						<div id="content">
							<Navabr/>
							<Users />
						</div>
							<Footer/>
							
					</div>
					
				</Route>
				<Route path="/projects/add">
					<div>
					<AddProject />	
					</div>
					
				</Route>
			</Switch>
		</BrowserRouter>
	</div>,
	document.getElementById("root")
);
