import React, { Component } from 'react';

import './CourseContent.scss';
import Scrollchor from 'react-scrollchor';
import axios from 'axios';
import LoginModel from '../../UI/SignUpModel/SignUpModel';

export default class CourseContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course_name: '',
			price: 0,
			discounted: 0,
			isLogin: false,
			showLoginModal: false,
			course_list: '',
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
				product_id: this.props.product_id
			},
			error_message: '',
			submittedCall: false,
			isLoading: true,
			header_image: '',
			transition: 0
		};
	}

	showModal() {
		this.setState({
			showLoginModal: true
		});
	}

	hideModal() {
		this.setState({ showLoginModal: false });
	}

	componentDidMount() {
		const formData = new FormData();
		formData.append('product_id', this.state.request.product_id);
		console.log(window.location);

		axios.post('https://www.careeranna.com/websiteapi/getCourseIntroContent', formData).then((response) => {
			this.setState({
				course_name: response.data.course_name,
				price: response.data.price,
				discounted: response.data.discount,
				course_list: response.data.course_list,
				isLoading: false,
				header_image: response.data.header_image
			});
		});
		axios.get('https://www.careeranna.com/websiteapi/isLoggedIn').then((response) => {
			if (response.data === 'notLoggedin') {
				this.setState({ isLogin: false });
			} else {
				this.setState({ isLogin: true });
			}
		});
		this.intervalId = setInterval(this.timer.bind(this), 3000);
	}

	timer() {
		if (this.state.transition === 0) {
			this.setState({ transition: 1 });
		} else {
			this.setState({ transition: 0 });
		}
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

		let day = date.getDate();
		let monthIndex = date.getMonth();
		let year = date.getFullYear();
		let postfix = '';

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
		if (
			event.target.value.length > 0 &&
			event.target.value.indexOf('@') !== -1 &&
			event.target.value.indexOf('.') !== -1
		) {
			if (!(request.email.value.match(pattern) == null)) {
				request.email.isValid = true;
			} else {
				request.email.isValid = false;
			}
		} else {
			request.email.isValid = true;
		}
		this.setState({ submit: false, request: request });
	};

	changePhoneSubmit = (event) => {
		let request = this.state.request;
		request.mobile.value = event.target.value;
		if (event.target.value.length > 0) {
			if (event.target.value.match('[A-Za-z\\W_]+') != null) {
				request.mobile.isValid = false;
			} else {
				request.mobile.isValid = true;
			}
		} else {
			request.mobile.isValid = true;
		}
		this.setState({ submit: false, request: request });
	};

	submitRequest = (event) => {
		event.preventDefault();
		const request = this.state.request;
		if (request.name.isValid && request.email.isValid && request.mobile.isValid) {
			const formData = new FormData();
			formData.append('name', request.name.value);
			formData.append('mobile', request.mobile.value);
			formData.append('email', request.email.value);
			formData.append('product_id', request.product_id);

			axios
				.post('https://www.careeranna.com/websiteapi/requestCall', formData)
				.then((response) => {
					this.setState({
						submittedCall: true
					});
					setTimeout(() => {
						this.setState({
							submittedCall: false
						});
					}, 3000);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	formatDiscount(price) {
		var parts = price.toString().split('.');
		return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
	}

	onSubmitCall = () => {
		this.setState({ showLoginModal: true });
		//alert('Please Sign Up or Log in to Continue');
	};

	render() {
		const course_name = this.state.course_name;

		const price = this.formatDiscount(this.state.price);
		const discounted = this.formatDiscount(this.state.discounted);

		const request = this.state.request;

		const isLoggedIn = this.state.isLogin;
		const showLoginModal = this.state.showLoginModal;

		let offer_price = Math.round(
			(Number(this.state.price) - Number(this.state.discounted)) / Number(this.state.price) * 100
		);

		if (isNaN(offer_price)) {
			offer_price = 0;
		}

		const header_image = this.state.header_image;

		const date = new Date();
		date.setDate(date.getDate() + 1);
		const updateddate = this.formatDate(date);

		let error_message;

		if (!request.name.isValid) {
			if (!request.mobile.isValid) {
				if (!request.email.isValid) {
					error_message = 'Enter Valid Name, Contact Number, Email ID';
				} else {
					error_message = 'Enter Valid Name, Contact Number';
				}
			} else {
				error_message = 'Enter Valid Name';
				if (!request.email.isValid) {
					error_message = 'Enter Valid Name, Email ID';
				}
			}
		} else {
			if (!request.mobile.isValid) {
				if (!request.email.isValid) {
					error_message = 'Enter Valid Contact Number, Email ID';
				} else {
					error_message = 'Enter Valid Contact Number';
				}
			} else {
				if (!request.email.isValid) {
					error_message = 'Enter Valid Email ID';
				}
			}
		}

		const submittedCall = this.state.submittedCall;
		const course_list = this.state.course_list;
		const isLoading = this.state.isLoading;

		return (
			<div className="upper_main">
				<LoginModel
					show={showLoginModal}
					modalClosed={() => this.hideModal()}
					product_id={request.product_id}
				/>
				<div
					className="CourseContent"
					style={{
						backgroundImage: `linear-gradient(180deg, #20242fcf 0%, rgba(255, 255, 255, 0.15) 488.9%), url(${header_image})`
					}}
				>
					<div className="container px-0">
						<div className="row px-0">
							<div className="content">
								{isLoading ? (
									<div id="preloader" style={{ left: '10%', top: '30%' }}>
										<div id="loader" />
									</div>
								) : null}

								<h1 className="course_name">
									CAT 2019<span> COACHING</span>
								</h1>
								<div className="slider_playlist col-md-9 px-0">
									{this.state.transition === 0 ? (
										<div className="price">
											<span className="intro_offer_price">
												<b>{`Now For ₹ ${discounted}* `}</b>
											</span>
											<span className="intro_max_price">
												<del>{`For ₹${price}`}</del>
											</span>
											<span className="intro_max_price_1">{'' + offer_price + '% Off '}</span>
										</div>
									) : (
										<div className="intro_offer_expire">{'* Offer ends on ' + updateddate}</div>
									)}
								</div>
								<div className="enroll_and_other_buttons" style={{ marginBottom: '1rem' }}>
									{isLoggedIn ? (
										<a
											href={'https://www.careeranna.com/Cart/add/' + request.product_id}
											className="enroll_now d-inline-block"
										>
											Enroll Now
										</a>
									) : (
										<a
											href="#enroll_now"
											onClick={this.onSubmitCall}
											className="enroll_now d-inline-block"
										>
											Enroll Now
										</a>
									)}
								</div>
								<ul className="course_intro_list" dangerouslySetInnerHTML={{ __html: course_list }} />

								<div className="enroll_and_other_buttons">
									<Scrollchor to="#course_content" animate={{ offset: 0, duration: 300 }}>
										<div className="demo_button d-inline-block mr-2">
											Course Content{' '}
											<i
												style={{ position: 'relative', top: '1.5px' }}
												className="fas fa-angle-down    "
											/>{' '}
										</div>
									</Scrollchor>
									<Scrollchor to="#related_courses" animate={{ offset: 0, duration: 300 }}>
										<div className="demo_button d-inline-block">
											Related Courses{' '}
											<i
												style={{ position: 'relative', top: '1.5px' }}
												className="fas fa-angle-down    "
											/>{' '}
										</div>
									</Scrollchor>
								</div>
							</div>
							<div className="right_wrapper">
								<div className="upper_form row">
									<div className="slider_playlist col-md-9 px-0">
										{this.state.transition === 0 ? (
											<div className="price">
												<span className="intro_offer_price">
													<b>{`Now For ₹ ${discounted}* `}</b>
												</span>
												<span className="intro_max_price">
													<del>{`For ₹${price}`}</del>
												</span>
												<span className="intro_max_price_1">{'' + offer_price + '% Off '}</span>
											</div>
										) : (
											<div className="intro_offer_expire">{'* Offer ends on ' + updateddate}</div>
										)}
									</div>
									<div className="col-md-3 enroll_tab px-0">
										{isLoggedIn ? (
											<a
												href={'https://www.careeranna.com/Cart/add/' + request.product_id}
												className="enroll_now d-inline-block"
											>
												Enroll Now
											</a>
										) : (
											<a
												href="#enroll_now"
												onClick={this.onSubmitCall}
												className="enroll_now d-inline-block"
											>
												Enroll Now
											</a>
										)}
									</div>
								</div>
								<div className="lower_form">
									<div className="heading">
										<span>Request a Call Back</span>
									</div>
									{!(request.name.isValid && request.mobile.isValid && request.email.isValid) ? (
										<div
											className="alert alert-danger"
											style={{ textAlign: 'center', fontSize: '1.3rem' }}
										>
											<strong>{error_message}</strong>
										</div>
									) : null}
									{submittedCall ? (
										<div
											className="alert alert-success"
											style={{ textAlign: 'center', fontSize: '1.4rem' }}
										>
											<strong>Request Submitted</strong>
										</div>
									) : null}
									<form className="request_form row m-0" onSubmit={this.submitRequest}>
										<div className="input-group col-md-4">
											<input
												type="text"
												name="name"
												autoComplete="off"
												className={
													request.name.value.length > 0 ? (
														'form-control touched'
													) : (
														'form-control'
													)
												}
												id="name"
												placeholder="Full Name"
												onChange={this.changeNameSubmit}
												required
											/>
											<label>Full Name</label>
										</div>
										<div className="input-group col-md-4">
											<input
												type="text"
												pattern="[7-9][0-9]{9}"
												maxLength="10"
												autoComplete="off"
												name="mobile"
												id="mobile"
												placeholder="Contact Number"
												className={
													request.mobile.value.length > 0 ? (
														'form-control touched'
													) : (
														'form-control'
													)
												}
												onChange={this.changePhoneSubmit}
												required
											/>
											<label>Contact Number</label>
										</div>
										<div className="input-group col-md-4">
											<input
												type="email"
												pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
												autoComplete="off"
												name="email"
												className={
													request.email.value.length > 0 ? (
														'form-control touched'
													) : (
														'form-control'
													)
												}
												id="email"
												placeholder="Enter email"
												onChange={this.changeEmailSubmit}
												required
											/>
											<label>Enter your email</label>
										</div>
										<input type="text" name="product_id" defaultValue={request.product_id} hidden />
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
											Submit
										</button>
										<div className="contact_us">
											Alternatively, Contact us on Whatsapp at{' '}
											<a href="https://api.whatsapp.com/send?phones=919741133224&text=Hi">
												+91-9741133224
											</a>
										</div>
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
