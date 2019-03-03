import React, { Component } from 'react';

import './CourseIntro.scss';
import Scrollchor from 'react-scrollchor';

import axios from 'axios';

class CourseIntro extends Component {
	state = {
		price: '4,999',
		discounted: '14,999',
		submit: true,
		request: {
			name: {
				value: '',
				isValid: true
			},
			email: {
				value: '',
				isValid: true
			},
			mobile: {
				value: '',
				isValid: true
			},
			product_id: '216'
		}
	};

	componentDidMount() {
		axios.get('https://www.careeranna.com/websiteapi/getCourseDetails').then((response) => {
			this.setState({ price: response.data.price, discounted: response.data.discount });
		});
	}

	formatDate(date) {
		var monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		var day = date.getDate();
		var monthIndex = date.getMonth();
		var year = date.getFullYear();
		var postfix = '';

		if (day > 3 && day < 21) return 'th';
		switch (day % 10) {
			case 1:
				postfix = 'st';
				break;
			case 2:
				postfix = 'nd';
				break;
			case 3:
				postfix = 'rd';
				break;
			default:
				postfix = 'th';
				break;
		}
		return day + postfix + ' ' + monthNames[monthIndex] + ' ' + year;
	}

	capitalize(s) {
		return s.toLowerCase().replace(/\b./g, function(a) {
			return a.toUpperCase();
		});
	}

	changeNameSubmit = (event) => {
		let request = this.state.request;
		request.name.value = this.capitalize(event.target.value);
		let value = event.target.value;
		value = value.split(' ').join('');
		if (value.match('[0-9\\W_]+') == null) {
			request.name.isValid = true;
		} else {
			request.name.isValid = false;
		}
		this.setState({ submit: false, request: request });
	};

	changeEmailSubmit = (event) => {
		let request = this.state.request;
		request.email.value = event.target.value;
		let pattern =
			"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
		if (!(request.email.value.match(pattern) == null)) {
			request.email.isValid = true;
		} else {
			request.email.isValid = false;
		}
		this.setState({ submit: false, request: request });
	};

	changePhoneSubmit = (event) => {
		let request = this.state.request;
		request.mobile.value = event.target.value;
		console.log(request.mobile.value);
		if (!(request.mobile.value.match('[0-9]+') == null)) {
			request.mobile.isValid = true;
		} else {
			request.mobile.isValid = false;
		}
		this.setState({ submit: false, request: request });
	};

	submitRequest = (event) => {
		event.preventDefault();
		const request = this.state.request;
		if (request.name.isValid && request.email.isValid && request.mobile.isValid) {
			let bodyFormData = {
				name: request.name.value,
				mobile: request.mobile.value,
				email: request.email.value,
				product_id: request.product_id
			};
			console.log(bodyFormData);
			axios({
				method: 'post',
				url: 'https://www.careeranna.com/websiteapi/requestCall',
				data: bodyFormData,
				config: { headers: { 'Content-Type': 'multipart/form-data' } }
			})
				.then(function(response) {
					//handle success
					console.log(response);
				})
				.catch(function(response) {
					//handle error
					console.log(response);
				});
		}
	};

	render() {
		const date = new Date();
		date.setDate(date.getDate() + 1);
		const updateddate = this.formatDate(date);
		const request = this.state.request;
		const price = this.state.price;
		const discounted = this.state.discounted;

		return (
			<div className="CourseIntro">
				<div className="row">
					<div className="col-md-6 col-12 intro_left_wrapper px-0">
						<div className="bg" />
						<h1 className="course_intro_heading m-0">
							cat<span className="course_intro_sub">2019</span>
							<span className="course_intro_subtitle m-0">coaching</span>
						</h1>
						<ul className="course_intro_list">
							<li>300+ Hours of Videos covering entire CAT Online Coaching 2019 syllabus.</li>
							<li>48 Students with 99+ Percentile in CAT 2018.</li>
							<li>CAT Mock Test Series of 15 All India Mocks.</li>
							<li>Concepts covered from Basics to Advanced to Past Year Questions.</li>
						</ul>
						<div className="course_price_and_offer">
							<span className="intro_max_price">
								<del>{`For ₹${price}/`}</del>
							</span>
							<span className="intro_offer_price">
								<b>{`Now For ₹${discounted}/-`}</b>
							</span>
							<div className="intro_offer_expire">{'Discount ends on ' + updateddate}</div>
						</div>
						<div className="enroll_and_other_buttons">
							<a href="https://www.careeranna.com/iimcat/" className="enroll_now">
								Enroll Now
							</a>
							<Scrollchor to="#video" animate={{ offset: 0, duration: 300 }}>
								<div href="#demoVideo" className="demo_button d-inline-block">
									Demo Video
								</div>
							</Scrollchor>
							<Scrollchor to="#pastScore" animate={{ offset: 0, duration: 300 }}>
								<div href="#pastScroe" className="pastScore d-inline-block">
									Past Results
								</div>
							</Scrollchor>
						</div>
					</div>
					<div className="col-md-6 col-12 intro_right_wrapper px-0">
						<div className="requestForm">
							<div className="heading">Request a free Call Back</div>
							{/* <div className="subheading">
                                Please fill out this form and we will call you back. 
                            </div> */}
							<div className="image_and_form row px-0">
								<div className="col-md-5 col-12 image px-0">
									<img src="https://www.careeranna.com/home/static/media/request-min.jpg" alt="" />
								</div>
								<div className="col-md-7 col-12 px-0">
									<form class="request_form" onSubmit={this.submitRequest}>
										<div class="input-group">
											<div className="input-group-addon">
												<i class="fa fa-user-circle" aria-hidden="true" />
											</div>
											<input
												type="text"
												name="name"
												autoComplete="off"
												className={
													request.name.isTouched && !request.name.isValid ? 'error' : ''
												}
												id="name"
												placeholder="Full Name"
												onChange={this.changeNameSubmit}
												class="form-control"
												required
											/>
											{!request.name.isValid && request.name.value != '' ? (
												<small>Enter A Valid Name.</small>
											) : null}
										</div>
										<div class="input-group">
											<div className="input-group-addon">+91</div>
											<input
												type="text"
												pattern="[7-9][0-9]{9}"
												maxLength="10"
												autoComplete="off"
												name="mobile"
												className={
													request.mobile.isTouched && !request.mobile.isValid ? 'error' : ''
												}
												id="mobile"
												placeholder="Contact Number"
												class="form-control"
												onChange={this.changePhoneSubmit}
												required
											/>
											{!request.mobile.isValid && request.mobile.value !== '' ? (
												<small>Enter A Valid Number.</small>
											) : null}
										</div>
										<div class="input-group">
											<div className="input-group-addon">@</div>
											<input
												type="email"
												pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
												autoComplete="off"
												name="email"
												className={
													request.email.isTouched && !request.email.isValid ? 'error' : ''
												}
												id="email"
												placeholder="Enter your email"
												onKeyPress={this.changeEmailSubmit}
												class="form-control"
												required
											/>
											{!request.email.isValid && request.email.value != '' ? (
												<small>Enter A Valid Email</small>
											) : null}
										</div>
										<input type="text" name="product_id" value="216" hidden />
										<button
											className={
												!(
													request.name.isValid &&
													request.mobile.isValid &&
													request.email.isValid
												) ? (
													'submit_request disabled'
												) : (
													'submit_request'
												)
											}
										>
											Send Request
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CourseIntro;
