function SideNav() {
	return (
		<nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-color p-0 side-nav-bare">
			<div className="container-fluid d-flex flex-column p-0">
				<a
					className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
					href="#"
				>
					<div className="sidebar-brand-icon rotate-n-15">
						<img src="%PUBLIC_URL%/assets/img/logo_ESIprojects_white.png" />
					</div>
				</a>
				<hr className="sidebar-divider my-0" />
				<ul className="navbar-nav text-light" id="accordionSidebar">
					<li className="nav-item">
						<a className="nav-link" href="index.html">
							<i className="fas fa-tachometer-alt"></i>
							<span>Dashboard</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="profile.html">
							<i className="fas fa-user"></i>
							<span>Profile</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="myProjects.html">
							<i className="fas fa-table"></i>
							<span>My Projects</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="Propose-project.html">
							<i className="fa-regular fa-layer-plus"></i>
							<span>Propose Project</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="Users.html">
							<i className="fa-solid fa-users-gear"></i>
							<span>Manage Users</span>
						</a>
					</li>
				</ul>
				<div className="text-center d-none d-md-inline">
					<button
						className="btn rounded-circle border-0"
						id="sidebarToggle"
						type="button"
					></button>
				</div>
			</div>
		</nav>
	);
}

export default SideNav;
