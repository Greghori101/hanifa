import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AOS from "aos";

function Project() {
	const [post, setPost] = useState([]);

	let history = useHistory();

	const getMyProject = async (projectId) => {
		let url = "http://127.0.0.1:8000/api/projects/" + projectId ;
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

	const deleteProject = async (projectId) => {
		let url = "http://localhost:8001/projects/delete/" + projectId;
		let options = {
			method: "DELETE",
			url: url,
		};
		let response = await axios(options);
		if (response && response.status === 200) {
			toggleModalDelete();
			history.go("/projects");
		}
	};

	const archiveProject = async (projectId) => {
		let url = "http://localhost:8001/projects/archive/" + projectId;
		let options = {
			method: "DELETE",
			url: url,
		};
		let response = await axios(options);
		if (response && response.status === 200) {
			toggleModalDelete();
			history.go("/projects");
		}
	};

	const approveProject = async (projectId) => {
		let url = "http://localhost:8001/projects/approve/" + projectId;
		let options = {
			method: "PUT",
			url: url,
		};
		let response = await axios(options);
		if (response && response.status === 200) {
			toggleModalDelete();
			history.go("/projects");
		}
	};

	const editProject = async (projectId) => {
		history.go("projects/edit/");
	};

	useEffect(() => {
		getMyProject();
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="container-fluid margin">
			<div className="project shadow-lg">
				<div className="row">
					<div className="col">
						<label className="form-label project-title">
							{post.title}
						</label>
						<label className="form-label {post.state}">
							{post.state}
						</label>
					</div>
					<div className="col action">
						<a
							className="btn btn-danger btn-circle ms-1"
							role="button"
							onClick={deleteProject}
						>
							<i className="fas fa-trash text-white"></i>
						</a>
						<a
							className="btn btn-info btn-circle ms-1"
							role="button"
							onClick={editProject}
						>
							<i className="fas fa-edit text-white"></i>
						</a>
						<a
							className="btn btn-warning btn-circle ms-1"
							role="button"
							onClick={archiveProject}
						>
							<i class="fa-solid fa-box-archive"></i>
						</a>
						<a
							className="btn btn-success btn-circle ms-1"
							role="button"
							onClick={approveProject}
						>
							<i class="fa-solid fa-circle-check"></i>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="col-form-label">
							Created by {post.author.name} on {post.dateOfCreation}
						</label>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="col-form-label">Level {post.level}</label>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label title">Summary</label>
						<p>
							{post.summary}
							<br />
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label title">Description</label>
						<p>
							{post.description}
							<br />
						</p>
						<label className="form-label title">Attachment</label>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<label className="form-label title">Tools and Tags</label>
						<ul className="list-group keywords">
							{post.keywords.map((keyword, index) => {
								return (
									<li key={index} className="list-group-item keyword">
										<span>{keyword}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col file-review">
						<label className="form-label">
							Here you can find the project presentation sheet
						</label>
						<div>
							<img className="pdf-style" src="assets/img/pdf-24.svg" />
							<a href="{post.file}">{post.file}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
