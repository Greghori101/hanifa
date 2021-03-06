/* li testahaa hociiine : 

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

function Home() {
	const [posts, setPost] = useState([]);

	let history = useHistory();
	const goTo = async (id) => {
		history.go("/myProjects/" + id);
	};

	const getProjects = async () => {
		let url = "http://127.0.0.1:8000/api/projects/get/all";
		let options = {
			method: "get",
			url: url,
		};
		await axios(options).then((res) => {
			let response = res.data;
			setPost(response.projects);
			console.log(response);
		});
	};
	useEffect(() => {
		getProjects();
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="col">
			{() => {
				if (posts.length === 0) {
					return <h1>Oops! there is no project to display</h1>;
				}
			}}
			{posts.map((post, id) => {
				return (
					<div key={id} className="row">
						<div className="col">
							<div className="project">
								<label className="form-label project-title">
									{post.title}
								</label>
								<div className="container">
									<label className="form-label">
										Created by ******
										{/* {post.author.name} */} on{" "}
										{post.dateOfCreation}
									</label>
								</div>
								<p>
									{post.summary}
									<br />
								</p>
								<div className="row">
									<div className="col">
										<label className="form-label title">
											Tools and Tags
										</label>
										<ul className="list-group keywords">
											{post.keywords.map((keyword, index) => {
												return (
													<li
														key={index}
														className="list-group-item keyword"
													>
														<span>{keyword}</span>
													</li>
												);
											})}
										</ul>
										<button
											className="btn btn-primary more-details-btn"
											type="button"
											onClick={() => {
												goTo(post.id);
											}}
										>
											More details
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Home;
*/


/*exemple berk jayah ala home za3ma:*/
import React, { useEffect, useState } from "react";
import { BrowserRouter,Route,Switch,useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import Nav from "./components/users/nav.component";
import Homepage from "./components/users/homepage.component";
import Login from "./components/users/Login";
import ForgotPassword from "./components/users/ForgotPassword";
import ResetPassword from "./components/users/ResetPassword";
function Home() {

	return (
		<BrowserRouter>
		<div className="Home">
         <Nav/>
		 <div className="auth-wrapper">
			 <div className="auth-inner">
				 <Switch>
					 <Route exact  path="/home" component={Homepage}/>
					 <Route exact path="/login" component={Login}/>
					 <Route exact path="/reset:id" component={ResetPassword}/>
					
				 </Switch>

			 </div>

		 </div>
		</div>
		</BrowserRouter>
	);
}

export default Home;

