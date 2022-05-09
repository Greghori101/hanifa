import React, { useEffect, useState,useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

function Users() {
	const [posts, setPosts] = useState([]);

	let history = useHistory();
	const goTo = async (id) => {
		history.go("/projects/" + id);
	};


	const getUsers = useCallback(async () => {
		let url = "http://192.168.43.151:8000/api/users";
		let options = {
			method: "get",
			url: url,
			headers: {
				Authorization:
					"Bearer " + "1|Z7GR8hWZ9qaSRPwzgP3ZYezESqGqUQWJ2gPY3nvW",
				Accept: "Application/json",
			},
		};
		await axios(options).then((res) => {
			let data = res.data;
			setPosts(data);
			console.log(data);
		});
	},[]);

	const deleteUser = async (userId) => {
		let url = "http://192.168.43.151:8000/api/deleteUser/" + userId;
		let options = {
			method: "DELETE",
			url: url,
			headers: {
				Authorization:
					"Bearer " + "4|BTMyBywDPrpv6W2mfSlhFfKN4SRLmD9TbYtU3MUb",
				Accept: "Application/json",
			},
		};
		let response = await axios(options);
		if (response && response.status === 200) {
			history.go("/users");
		}
	};

	useEffect(() => {
		getUsers();
		AOS.init();
		AOS.refresh();

	}, [getUsers]);

	return (
		<div className="container-fluid">
			<h3 className="text-dark mb-4">Users</h3>
			<div className="card shadow">
				<div className="card-header py-3">
					<p className="text-primary m-0 fw-bold">User Info</p>
				</div>
				<div className="card-body">
					<div
						className="table-responsive table mt-2"
						id="dataTable"
						role="grid"
						aria-describedby="dataTable_info"
					>
						<table className="table my-0" id="dataTable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Email</th>
									<th>Role</th>
									<th style={{ width: "120px" }}>Action</th>
								</tr>
							</thead>
							<tbody>
								{posts.map((post, id) => {
									return(
									<tr key={id}>
										<td>
											<img
												className="rounded-circle me-2"
												width="30"
												height="30"
												src="assets/img/avatars/avatar1.jpeg"
											/>
											
											{post.firstName} {post.lastName} {post.name}
										</td>
										<td>{post.email}</td>
										<td>{post.role}</td>
										<td>
											<div className="col">
												<a
													className="btn btn-danger btn-circle ms-1"
													role="button"
													onClick={()=>deleteUser(post.user_id)}
												>
													<i className="fas fa-trash text-white"></i>
												</a>{/* 
												<a
													className="btn btn-info btn-circle ms-1"
													role="button"
												>
													<i className="fas fa-edit text-white"></i>
												</a> */}
											</div>
										</td>
									</tr>
								)})}
							</tbody>
							<tfoot>
								<tr>
									<td>
										<strong>Name</strong>
									</td>
									<td>
										<strong>Email</strong>
									</td>
									<td>
										<strong>Role</strong>
									</td>
									<td>
										<strong>Action</strong>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Users;
