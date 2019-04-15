import React, { Component } from 'react';
import './Footer.scss';

import axios from 'axios';

class Footer extends Component {
	state = {
		email: '',
		inValidEmail: false,
		subscribe: false
	};

	setEamilValue = (event) => {
		let email = this.state.email;
		email = event.target.value;
		this.setState({ email: email, inValidEmail: false, error_message: '' });
	};

	sendSuscribeRequest = (event) => {
		event.preventDefault();
		let emailvalue = this.state.email;
		if (emailvalue.length > 0 && emailvalue.indexOf('@') !== -1) {
			const formData = new FormData();
			formData.append('email', emailvalue);
			formData.append('source', 'Footer_CAT_2019_COACHING');
			axios
				.post('https://www.careeranna.com/websiteapi/subscribeToNewsLetter', formData)
				.then((response) => {
					this.setState({ inValidEmail: false, subscribe: true });
				})
				.catch((err) => {
					this.setState({ inValidEmail: true, error_message: 'Error Occured !' });
					alert('Some Error Occured !');
				});
		} else {
			this.setState({ inValidEmail: true, error_message: 'Please Enter Valid Email' })
		}
	};

	render() {
		const inValidEmail = this.state.inValidEmail;
		const email = this.state.email;
		const error_message = this.state.error_message;

		return (
			<footer className="footer">
				<div className="row">
					<div className="col-12 col-md-5 px-0">
						<div className="row">
							<div className="col-md-12 px-0 footer_left_heading">CareerAnna</div>

							<div className="footer_copyright col-12 col-md-12 padding-none">
								<p>© CareerAnna Education Pvt. Ltd. 2019</p>
							</div>
							<div className="col-md-12 padding-none social_icons">
								<ul className="list-inline">
									<li>
										<a href="https://m.facebook.com/careerannacorp/">
											<img
												src="https://www.careeranna.com/home/static/media/facebook.svg"
												alt=""
												width="24px"
											/>
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/channel/UCZmLZ68KNZotm3BxkGsuU4g">
											<img
												src="https://www.careeranna.com/home/static/media/youtube.svg"
												alt=""
												width="24px"
											/>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/company/careeranna">
											<img
												src="https://www.careeranna.com/home/static/media/linkedin.svg"
												alt=""
												width="24px"
											/>
										</a>
									</li>
									<li>
										<a href="https://twitter.com/CareerAnna">
											<img
												src="https://www.careeranna.com/home/static/media/twitter.svg"
												alt=""
												width="24px"
											/>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/careeranna">
											<img
												src="https://www.careeranna.com/home/static/media/insta.svg"
												alt=""
												width="24px"
											/>
										</a>
									</li>
								</ul>
							</div>

							<div className="col-md-12 subs_form row">
								<h4 className="col-md-12 padding-none">Subscribe to our newsletter</h4>
								{this.state.subscribe ? (
									<div class="alert alert-success">
										<strong>You Have Been Subscribed</strong>
									</div>
								) : null}
								{inValidEmail ? (
									<div class="alert alert-danger">
										<strong>{error_message}</strong>
									</div>
								) : null}

								<form onSubmit={this.sendSuscribeRequest} className="row col-md-12 padding-none">
									<div className="form-group col col-md-6 col-sm-6 padding-none">
										<input
											type="email"
											name="email"
											required=""
											onChange={this.setEamilValue}
											placeholder="Enter your Email"
											id="subscribe_email"
											className={email.length > 0 ? 'form-control touched' : 'form-control'}
										/>
										<label>Enter your Email</label>
									</div>
									<div className="col-md-5 col col-sm-6 padding-none">
										<button
											className="btn btn-primary"
											type="submit"
											onClick={this.sendSuscribeRequest}
										>
											Subscribe
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-7 pl-0 row footer_left_links">
						{/* pl belongs to bootstrap 4 className for padding check documentation*/}
						<div className="col-md-2 col-6 pl-0 pr-0">
							<h6>FREE VIDEO RESOURCE</h6>
							<ul>
								<li>
									<a href="https://www.careeranna.com/english/free/videos" title="Finance">
										English Free Videos
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/hindi/free/videos" title="Marketing">
										Hindi Free Videos
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/tamil/free/videos" title="Marketing">
										Tamil Free Videos
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/telugu/free/videos" title="Human Resource">
										Telugu Free Videos
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-1 col-6 pl-3 pr-3">
							<h6>MBA</h6>
							<ul>
								<li>
									<a href="https://www.careeranna.com/CAT" title="CAT">
										CAT
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/XAT" title="XAT">
										XAT
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/NMAT" title="NMAT">
										NMAT
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/SNAP" title="SNAP">
										SNAP
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/TISSNET" title="TISSNET">
										TISSNET
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/MICAT" title="MICAT">
										MICAT
									</a>
								</li>
								<li>
									<a href="https://www.careeranna.com/IIFT" title="IIFT">
										IIFT
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-2 col-6 pl-0 pr-0 ml-5 mr-0 certificate">
							<h6>CERTIFICATE COURSE</h6>
							<ul>
								<li>
									<a
										href="https://www.careeranna.com/certification/machine-learning-course"
										title="Machine Learning"
									>
										Machine Learning
									</a>
								</li>
								<li>
									<a
										href="https://www.careeranna.com/certification/artificial-intelligence-course"
										title="Artificial Intelligence"
									>
										Artificial Intelligence
									</a>
								</li>
								<li>
									<a
										href="https://www.careeranna.com/certification/Certified-Associate-in-Material-Management"
										title="Material Management"
									>
										Material Management
									</a>
								</li>
								<li>
									<a
										href="https://www.careeranna.com/certification/product-management"
										title="Product Management"
									>
										Product Management
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-2 col-6 pl-3 pr-0">
							<h6>RESOURCE</h6>
							<ul>
								<li>
									<a id="ga-14df32" href="https://www.careeranna.com/courses">
										Courses
									</a>
								</li>
								<li>
									<a id="ga-41441e" href="https://www.careeranna.com/articles">
										Articles
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-2 col-6 pl-0 pr-0">
							<h6>SUPPORT</h6>
							<ul>
								<li>
									<a id="ga-14df32" href="https://www.careeranna.com/careers">
										Careers
									</a>
								</li>
								<li>
									<a id="ga-2dc1d0" href="https://www.careeranna.com/about">
										About Us
									</a>
								</li>
								<li>
									<a id="ga-2dc1d0" href="https://www.careeranna.com/contact">
										Contact Us
									</a>
								</li>
								<li>
									<a id="ga-2dc1d0" href="https://www.careeranna.com/terms-of-service">
										Terms of Service
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
