import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

function Navbar() {
	const [post, setPost] = useState([]);
	const [searchfield, setField] = useState("");
	let data = {
		searchfield,
	};

	let history = useHistory();

	const search = async () => {
		let url = "http://127.0.0.1:8000/api/projects/search";
		let options = {
			method: "get",
			url: url,
			data: data,
		};

		let response = await axios(options);
		if (response.status === 200) {
			history.go("/search/results");
		}
	};

	const getNotifications = async () => {
		let url = "http://127.0.0.1:8000/api/users/notifications";
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
		getNotifications();
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
			<div className="container-fluid">
				<button
					className="btn btn-link d-md-none rounded-circle me-3"
					id="sidebarToggleTop"
					type="button"
				>
					<i className="fas fa-bars"></i>
				</button>
				<form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
					<div className="input-group">
						<input
							className="bg-light form-control border-0 small"
							type="text"
							placeholder="Search for ..."
							onChange={(event) => {
								setField(event.target.value);
							}}
						/>
						<button
							className="btn btn-primary py-0"
							type="button"
							onClick={search}
						>
							<i className="fas fa-search"></i>
						</button>
					</div>
				</form>
				<ul className="navbar-nav flex-nowrap ms-auto">
					
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
