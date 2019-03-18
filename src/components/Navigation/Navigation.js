import React, { Component } from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false,
			lang: props.lang,
			mba: 'MBA',
			hindi_videos: 'Hindi Videos',
			tamil_video: 'Tamil Videos',
			telugu_video: 'Telugu Videos',
			signup: 'Sign Up',
			login: 'Log In'
		};
	}

	componentDidMount() {
		axios.get('https://www.careeranna.com/websiteapi/isLoggedIn').then((response) => {
			if (response.data === 'notLoggedin') {
				this.setState({ isLogin: false });
			} else {
				this.setState({ isLogin: true });
			}
		});
	}

	render() {
		const isLoggedIn = this.state.isLogin;

		let mba = this.state.mba;
		let hindi_videos = this.state.hindi_videos;
		let tamil_video = this.state.tamil_video;
		let telugu_video = this.state.telugu_video;
		let login = this.state.login;
		let signup = this.state.signup;

		return (
			<div className="Navigation">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<Link className="navbar-brand" to="/">
						<img
							className="logo_image"
							src="https://www.careeranna.com/upload/main_page_testing/LOGO-01.png"
							id="wordmark"
							alt="brand_logo"
						/>
					</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item nav_link active">
								<a title="Courses" href="https://www.careeranna.com/courses">
									{mba}
								</a>
							</li>
							<li className="nav-item nav_link">
								<a title="Certifications" href="https://www.careeranna.com/hindi/free/videos">
									{hindi_videos}
								</a>
							</li>
							<li className="nav-item nav_link">
								<a title="Free Videos" href="https://www.careeranna.com/tamil/free/videos">
									{tamil_video}
								</a>
							</li>
							<li className="nav-item nav_link">
								<a title="Free Tests" href="https://www.careeranna.com/telugu/free/videos">
									{telugu_video}
								</a>
							</li>
							{!isLoggedIn ? (
								<li className="nav-item">
									<a
										title="Log In"
										className="btn btn-info primary_btn login"
										href="https://www.careeranna.com/signup"
									>
										{login}
									</a>
									<a
										title=" Sign Up"
										className="btn btn-info primary_btn signup"
										href="https://www.careeranna.com/signup#signup"
									>
										{signup}
									</a>
								</li>
							) : null}
							{!isLoggedIn ? (
								<li className="nav-item" />
							) : (
								<li className="nav-item">
									<a
										title="Get Started"
										className="btn btn-info primary_btn signup"
										href="https://www.careeranna.com/profile/enrolled_courses"
									>
										My Account
									</a>
								</li>
							)}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
