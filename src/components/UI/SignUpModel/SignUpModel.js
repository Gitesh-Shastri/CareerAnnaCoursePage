import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { GoogleLogin } from 'react-google-login';

import './SignUpModel.scss';
import axios from 'axios';
import BackDrop from '../BackDrop/BackDrop';
import ReCAPTCHA from 'react-google-recaptcha';

export default class SignUpModel extends Component {
	state = {
		showSignUp: false,
		email: '',
		password: '',
		invalidUserDetails: false,
		UserDetailsAlreadyExists: false,
		error_message: '',
		isLoginTouched: false,
		isSignUpTouched: false,
		isLoading: false,
		isForgotPassword: false,
		forgetEmail: '',
		emailnotExists: false,
		tokenSent: false,
		codemessage: '',
		code: 0,
		newPassword: false,
		newPasswordValue: '',
		passwordChange: false,
		signup: {
			signupname: '',
			signupemail: '',
			signupphone: '',
			signupcity: '',
			signuppassword: '',
			signuphowtoknow: 'Direct'
		},
		captcha_value: '',
		verified_captcha: false,
		showSignUpSmall: false,
		showLoginSmall: true,
		product_id: this.props.product_id
	};

	showSignUp = () => {
		this.setState({ showSignUp: true, isForgotPassword: false });
	};

	hideSignUp = () => {
		this.setState({ isSignUpTouched: false, isLoginTouched: false, isForgotPassword: false });
		if (this.state.showSignUp) {
			this.setState({ showSignUp: false });
		}
		this.props.modalClosed();
	};

	handleResponse = (data) => {
		const formData = new FormData();
		formData.append('facebook_id', data.profile.id);
		formData.append('user_name', data.profile.name);
		formData.append('email', '');
		if (data.profile.email !== undefined) {
			formData.append('email', data.profile.email);
		}
		this.setState({ isLoading: true });
		axios
			.post('https://www.careeranna.com/websiteapi/faceBookLogin', formData)
			.then((response) => {
				window.location.href = 'https://www.careeranna.com/cart/add/' + this.props.product_id;
				this.setState({ isLoading: false });
			})
			.catch((err) => {
				this.setState({ invalidUserDetails: true, isLoading: false });
				alert('Some Error Occured !');
			});
	};

	handleError = (error) => {
		this.setState({ error });
	};

	SignInUser = (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('email', this.state.email);
		formData.append('password', this.state.password);

		this.setState({ isLoading: true });
		axios
			.post('https://www.careeranna.com/websiteapi/getUserDetails', formData)
			.then((response) => {
				if (response.data === 'Email Id OR Password does not match.Please Try Again') {
					this.setState({ invalidUserDetails: true, isLoading: false });
				} else {
					this.setState({ invalidUserDetails: false, isLoading: false });
					window.location.href = 'https://www.careeranna.com/cart/add/' + this.props.product_id;
				}
			})
			.catch((err) => {
				this.setState({ invalidUserDetails: true });
				alert('Some Error Occured !');
			});
	};

	setEamilValue = (event) => {
		this.setState({ email: event.target.value, isLoginTouched: true, isSignUpTouched: false });
	};

	setSignUpEamilValue = (event) => {
		let signup = this.state.signup;
		signup.signupemail = event.target.value;
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
		let value = event.target.value;
		let pattern =
			"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
		if (value.length > 0 && value.indexOf('@') !== -1 && value.indexOf('.') !== -1) {
			if (value.match(pattern) == null) {
				this.setState({
					UserDetailsAlreadyExists: true,
					error_message: 'Enter A Valid Email'
				});
			} else {
				this.setState({
					UserDetailsAlreadyExists: false,
					error_message: ''
				});
			}
		} else {
			this.setState({
				UserDetailsAlreadyExists: false,
				error_message: ''
			});
		}
	};

	capitalize(s) {
		return s.toLowerCase().replace(/\b./g, function(a) {
			return a.toUpperCase();
		});
	}

	setSignUpNameValue = (event) => {
		let signup = this.state.signup;
		signup.signupname = this.capitalize(event.target.value);
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
		let value = event.target.value;
		value = value.split(' ').join('');
		if (value.length > 0) {
			if (value.match('[0-9\\W_]+') != null) {
				this.setState({
					UserDetailsAlreadyExists: true,
					error_message: 'Enter A Valid Name'
				});
			} else {
				this.setState({
					UserDetailsAlreadyExists: false,
					error_message: ''
				});
			}
		} else {
			this.setState({
				UserDetailsAlreadyExists: false,
				error_message: ''
			});
		}
	};

	setSignUpPhoneValue = (event) => {
		let signup = this.state.signup;
		signup.signupphone = event.target.value;
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
		if (event.target.value.length > 0) {
			if (event.target.value.match('[A-Za-z\\W_]+') != null) {
				this.setState({
					UserDetailsAlreadyExists: true,
					error_message: 'Enter A Valid Phone Number'
				});
			} else {
				this.setState({
					UserDetailsAlreadyExists: false,
					error_message: ''
				});
			}
		} else {
			this.setState({
				UserDetailsAlreadyExists: false,
				error_message: ''
			});
		}
	};

	setSignUpCityValue = (event) => {
		let signup = this.state.signup;
		signup.signupcity = event.target.value;
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
	};

	setSignUpPasswordValue = (event) => {
		let signup = this.state.signup;
		signup.signuppassword = event.target.value;
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
	};

	setSignUphowValue = (event) => {
		let signup = this.state.signup;
		signup.signuphowtoknow = event.target.value;
		this.setState({ signup: signup, isSignUpTouched: true, isLoginTouched: false });
	};

	setPasswordValue = (event) => {
		this.setState({ password: event.target.value, isLoginTouched: true, isSignUpTouched: false });
	};

	sendSignUpRequest = (event) => {
		event.preventDefault();
		const formData = new FormData();
		let signup = this.state.signup;
		if (
			signup.signupemail.length === 0 ||
			signup.signuppassword.length === 0 ||
			signup.signupname.length === 0 ||
			signup.signupcity.length === 0 ||
			signup.signupphone.length === 0
		) {
			this.setState({
				UserDetailsAlreadyExists: true,
				error_message: 'Enter A Valid Details'
			});
		} else if (!this.state.verified_captcha) {
			this.setState({
				UserDetailsAlreadyExists: true,
				error_message: 'Please Verify Via ReCaptcha'
			});
		} else {
			if (this.state.UserDetailsAlreadyExists) {
				this.setState({
					UserDetailsAlreadyExists: true,
					error_message: 'Enter A Valid Details'
				});
			} else {
				this.setState({ isLoading: true });
				formData.append('email', signup.signupemail);
				formData.append('password', signup.signuppassword);
				formData.append('name', signup.signupname);
				formData.append('city', signup.signupcity);
				formData.append('phone', signup.signupphone);
				formData.append('captcha_value', this.state.captcha_value);
				axios
					.post('https://www.careeranna.com/websiteapi/signUpUser', formData)
					.then((response) => {
						if (response.data === 'Email Already Exists Please Log In') {
							this.setState({
								UserDetailsAlreadyExists: true,
								error_message: 'Email Already Exists Please Log In',
								isLoading: false
							});
						} else {
							this.setState({ UserDetailsAlreadyExists: false, isLoading: false });
							window.location.href = 'https://www.careeranna.com/cart/add/' + this.props.product_id;
						}
					})
					.catch((err) => {
						this.setState({ invalidUserDetails: true, isLoading: false });
						console.log(err);
						alert('Some Error Occured !');
					});
			}
		}
	};

	changeLogin = (event) => {
		this.setState({ isLoginTouched: true, isSignUpTouched: false });
	};

	changeSignUp = (event) => {
		this.setState({ isLoginTouched: false, isSignUpTouched: true });
	};

	forgetPassword = (event) => {
		this.setState({ isForgotPassword: true });
	};

	forgetEmailUpdate = (event) => {
		this.setState({ forgetEmail: event.target.value });
	};

	responseGoogle = (response) => {
		const formData = new FormData();
		formData.append('google_id', response.profileObj.googleId);
		formData.append('user_name', response.profileObj.name);
		formData.append('email', response.profileObj.email);
		this.setState({ isLoading: true });
		axios
			.post('https://www.careeranna.com/websiteapi/googleLogin', formData)
			.then((response) => {
				this.setState({ isLoading: false });
				window.location.href = 'https://www.careeranna.com/cart/add/' + this.props.product_id;
			})
			.catch((err) => {
				this.setState({ invalidUserDetails: true, isLoading: false });
				console.log(err);
				alert('Some Error Occured !');
			});
	};

	forgetPasswordHide = (event) => {
		this.setState({ isForgotPassword: false });
	};

	forgetPasswordSent = (event) => {
		const formData = new FormData();
		let code = Math.floor(Math.random() * 900000 + 100000);
		this.setState({ code: code });
		formData.append('email', this.state.forgetEmail);
		formData.append('code', code);
		this.setState({ isLoading: true });
		axios
			.post('https://www.careeranna.com/websiteapi/forgetPass', formData)
			.then((response) => {
				if (response.data === 'No Email Exists !') {
					this.setState({ isLoading: false, emailnotExists: true });
				} else {
					this.setState({ isLoading: false, emailnotExists: false, tokenSent: true });
				}
				console.log(response);
			})
			.catch((err) => {
				this.setState({ isLoading: false });
				console.log(err);
				alert('Some Error Occured !');
			});
	};

	codeVerification = (event) => {
		this.setState({ newPassword: this.state.code === event.target.value });
	};

	newPasswordEnterCode = (event) => {
		this.setState({ newPasswordValue: event.target.value });
	};

	forgetPasswordChange = (event) => {
		const formData = new FormData();
		formData.append('email', this.state.forgetEmail);
		formData.append('newPassword', this.state.newPasswordValue);
		this.setState({ isLoading: true });
		axios
			.post('https://www.careeranna.com/websiteapi/forgetChangePassword', formData)
			.then((response) => {
				if (response.data === 'Record updated successfully') {
					this.setState({ isLoading: false, passwordChange: true });
					setTimeout(() => {
						this.setState({
							isForgotPassword: false
						});
					}, 2000);
				} else {
					this.setState({ isLoading: false, passwordChange: false });
				}
				console.log(response);
			})
			.catch((err) => {
				this.setState({ isLoading: false });
				console.log(err);
				alert('Some Error Occured !');
			});
	};

	onChange = (value) => {
		this.setState({ captcha_value: value });
		const formData = new FormData();
		formData.append('captcha_value', value);
		axios
			.post('https://www.careeranna.com/websiteapi/verifyCaptcha', formData)
			.then((response) => {
				console.log(response);
				this.setState({ verified_captcha: true });
			})
			.catch((err) => {
				console.log(err);
				alert('Some Error Occured !');
			});
	};

	showSignUpSm = (event) => {
		this.setState({ showSignUpSmall: true, showLoginSmall: false });
	};

	showLoginSm = (event) => {
		this.setState({ showSignUpSmall: false, showLoginSmall: true });
	};

	render() {
		const invalidUserDetails = this.state.invalidUserDetails;
		const UserDetailsAlreadyExists = this.state.UserDetailsAlreadyExists;
		const error_message = this.state.error_message;
		const isLoginTouched = this.state.isLoginTouched;
		const isSignUpTouched = this.state.isSignUpTouched;
		const isLoading = this.state.isLoading;
		const isForgotPassword = this.state.isForgotPassword;
		const emailnotExists = this.state.emailnotExists;
		const tokenSent = this.state.tokenSent;
		const newPassword = this.state.newPassword;
		const showSignUpSmall = this.state.showSignUpSmall;
		const showLoginSmall = this.state.showLoginSmall;

		let css_class_login = { background: '#FFF', borderRadius: '10px' };
		if (isSignUpTouched) {
			css_class_login = { background: 'rgba(242, 242, 242, 0.74)', opacity: '0.5', borderRadius: '10px' };
		} else if (isLoginTouched) {
			css_class_login = { background: '#FFF', borderRadius: '10px' };
		}
		let css_class_signup = { background: '#FFF', borderRadius: '10px' };
		if (isLoginTouched) {
			css_class_signup = { background: 'rgba(242, 242, 242, 0.74)', opacity: '0.5', borderRadius: '10px' };
		} else if (isSignUpTouched) {
			css_class_signup = { background: '#FFF', borderRadius: '10px' };
		}

		if (window.innerWidth < 650) {
			if (showLoginSmall) {
				css_class_login = { background: '#FFF', borderRadius: '10px' };
				css_class_signup = { display: 'none' };
			} else {
				css_class_login = { display: 'none' };
				css_class_signup = { background: '#FFF', borderRadius: '10px' };
			}
		}

		return (
			<div>
				<BackDrop show={this.props.show} clicked={this.props.modalClosed} hideSignUpBack={this.hideSignUp} />
				<div
					className="LoginModel"
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
						opacity: this.props.show ? '1' : '0',
						display: this.props.show ? 'block' : 'none',
						width: isForgotPassword ? '30%' : '70%',
						left: isForgotPassword ? '35%' : '15%',
						height: isForgotPassword ? 'auto' : '90vh',
						top: isForgotPassword ? 'auto' : '5vh',
						borderRadius: '10px'
					}}
				>
					{isLoading ? (
						<div id="preloader">
							<div id="loader" />
						</div>
					) : null}
					{!isForgotPassword ? (
						<div className="login_and_sign_up">
							<div className="row px-0">
								<div className="small_mobile_headings col-12 row px-0">
									<div
										className="login_small"
										onClick={this.showLoginSm}
										style={
											showLoginSmall ? (
												{
													opacity: '1',
													borderBottom: '1px solid #1989cd'
												}
											) : (
												{
													opacity: '0.4'
												}
											)
										}
									>
										Log In
									</div>
									<div
										className="signup_small"
										onClick={this.showSignUpSm}
										style={
											showSignUpSmall ? (
												{
													opacity: '1',
													borderBottom: '1px solid #1989cd'
												}
											) : (
												{
													opacity: '0.4'
												}
											)
										}
									>
										Sign Up
									</div>
								</div>
								<div
									className="col-md-6 col-12 px-0"
									style={css_class_login}
									onClick={this.changeLogin}
								>
									<form className="login_from" onSubmit={this.SignInUser}>
										<div className="heading">Log In</div>
										<hr className="line_heading" />

										{invalidUserDetails && isLoginTouched ? (
											<div class="alert alert-danger">
												<strong>Email Id Or Password does not match.Please Try Again</strong>
											</div>
										) : null}
										<div className="input-container">
											<input
												id="login_email"
												type="email"
												className={
													this.state.email.length > 0 && isLoginTouched ? 'touched' : ''
												}
												name="email"
												autoComplete="email"
												placeholder="Email Id"
												required
												onChange={this.setEamilValue}
												onFocus={this.changeLogin}
											/>
											<label>Email Id</label>
										</div>
										<div className="input-container forget_input">
											<input
												id="login_password"
												type="password"
												autoComplete="off"
												className={
													this.state.password.length > 0 && isLoginTouched ? 'touched' : ''
												}
												name="password"
												placeholder="Password"
												required
												onChange={this.setPasswordValue}
												onFocus={this.changeLogin}
											/>
											<label>Password</label>
											<div className="forget">
												<a
													href="#forget"
													onClick={this.forgetPassword}
													id="forgotPassword"
													className="disclaimer blue forgot-link clean"
												>
													Forgot Your Password?
												</a>
											</div>
										</div>
										<div className="row row-gap-tiny m-2 text-center">
											<input
												id="login_Id"
												type="button"
												className="btn btn-block btn-primary btn-login center-block mb-half"
												onClick={this.SignInUser}
												value="Log In"
											/>
										</div>
										<div className="or_line row">
											<div className="line_row">
												<div className="line" />
											</div>
											<div className="or">or</div>
											<div className="line_row px-0">
												<div className="line" />
											</div>
										</div>
										<div className="input-container sign_up_container">
											<FacebookProvider appId="888109497887404">
												<LoginButton
													className="fb_button"
													scope="email"
													onCompleted={this.handleResponse}
													onError={this.handleError}
												>
													<i className="fab fa-facebook" /> Log In with Facebook
												</LoginButton>
											</FacebookProvider>
											<GoogleLogin
												clientId="339798523475-694ai0mlrlm9o2ilchjqolv7a0sgofo6.apps.googleusercontent.com"
												render={(renderProps) => (
													<button
														className="button-social google"
														onClick={renderProps.onClick}
													>
														<div className="button-label">
															<i className="fab fa-google-plus-g" /> Log In with Google
														</div>
													</button>
												)}
												buttonText="Login"
												onSuccess={this.responseGoogle}
												onFailure={this.responseGoogle}
											/>
										</div>
									</form>
								</div>
								<div
									className="col-md-6 col-12 px-0"
									style={css_class_signup}
									onClick={this.changeSignUp}
								>
									<form className="signup_from" onSubmit={this.sendSignUpRequest}>
										<div className="heading">Sign Up</div>
										<hr className="line_heading" />
										{UserDetailsAlreadyExists && isSignUpTouched ? (
											<div class="alert alert-danger">
												<strong>{error_message}</strong>
											</div>
										) : null}
										<div className="signup_input-container d-inline-block">
											<input
												id="signup_name"
												type="text"
												className={
													this.state.signup.signupname.length > 0 && isSignUpTouched ? (
														'touched'
													) : (
														''
													)
												}
												name="name"
												autoComplete="off"
												placeholder="Full Name"
												required
												onChange={this.setSignUpNameValue}
												onFocus={this.changeSignUp}
											/>
											<label>Full Name</label>
										</div>
										<div className="signup_input-container d-inline-block float-right">
											<input
												id="signup_email"
												type="email"
												className={
													this.state.signup.signupemail.length > 0 && isSignUpTouched ? (
														'touched'
													) : (
														''
													)
												}
												name="email"
												autoComplete="email"
												placeholder="Email"
												required
												onChange={this.setSignUpEamilValue}
												onFocus={this.changeSignUp}
											/>
											<label>Email</label>
										</div>
										<div className="signup_input-container d-inline-block">
											<input
												id="signup_passqword"
												type="password"
												className={
													this.state.signup.signuppassword.length > 0 && isSignUpTouched ? (
														'touched'
													) : (
														''
													)
												}
												name="password"
												autoComplete="off"
												placeholder="Password"
												required
												onChange={this.setSignUpPasswordValue}
												onFocus={this.changeSignUp}
											/>
											<label>Password</label>
										</div>
										<div className="signup_input-container d-inline-block float-right">
											<input
												id="signup_mobile"
												type="text"
												className={
													this.state.signup.signupphone.length > 0 && isSignUpTouched ? (
														'touched'
													) : (
														''
													)
												}
												name="phone"
												inputMode="phone"
												pattern="[0-9]{10}"
												maxLength="10"
												autoComplete="off"
												placeholder="Phone No."
												required
												onChange={this.setSignUpPhoneValue}
												onFocus={this.changeSignUp}
											/>
											<label>Phone No.</label>
										</div>
										<div className="signup_input-container city_input d-inline-block">
											<input
												id="signup_city"
												type="text"
												className={
													this.state.signup.signupcity.length > 0 && isSignUpTouched ? (
														'touched'
													) : (
														''
													)
												}
												name="city"
												autoComplete="city"
												placeholder="City Name"
												required
												onChange={this.setSignUpCityValue}
												onFocus={this.changeSignUp}
											/>
											<label>City Name</label>
										</div>
										<div className="terms-wrap">
											<input
												type="checkbox"
												name="tos_accepted"
												id="tos"
												required
												className="checkBoxTerms"
											/>
											<span
												style={{
													marginLeft: '5px',
													fontSize: '12px',
													lineHeight: '1.2rem',
													position: 'relative',
													top: '0px'
												}}
											>
												I agree to the{' '}
												<a
													style={{ color: '#1989cd' }}
													href="https://www.careeranna.com/chome/privacypolicy"
													target="_blank"
													rel="noopener noreferrer"
												>
													Terms of Service
												</a>
											</span>
										</div>
										<ReCAPTCHA
											className="Captcha"
											sitekey="6LeFqBwUAAAAAKSO2HalU4JfueERpNvpALOlpblE"
											onChange={this.onChange}
										/>
										{/* <div className="signup_input-container d-inline-block float-right">
									<select
										class="custom-select mr-sm-2"
										id="inlineFormCustomSelect"
										name="howtoknow"
										onChange={this.setSignUphowValue}
									>
										<option selected>How did you come to know about us</option>
										<option value="Facebook">Facebook</option>
										<option value="Reffered by Friend">Referred by Friend</option>
										<option value="Google Search">Google Search</option>
										<option value="Quora">Quora</option>
										<option value="Direct">Direct</option>
										<option value="Social Media">Mail</option>
									</select>
								</div> */}

										<div className="row row-gap-tiny text-center">
											<input
												id="signup_Id"
												type="button"
												className="btn btn-block btn-primary btn-login center-block mb-half"
												onClick={this.sendSignUpRequest}
												value="Create A Free Account"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					) : (
						<div className="forgetPass">
							{emailnotExists ? (
								<div className="alert alert-danger">
									<strong>Email Does Not Exists. Please Sign Up!</strong>
								</div>
							) : null}
							{tokenSent && !newPassword ? (
								<div className="alert alert-success">
									<strong>Verification Code Has Been Sent To Email !</strong>
								</div>
							) : null}
							{this.state.passwordChange ? (
								<div className="alert alert-success password_changed">
									<strong>Your password has been changed successfully !</strong>
								</div>
							) : null}
							{!this.state.passwordChange ? (
								<div>
									<h4>Forgot password?</h4>
									<p>
										Enter your email address below. We'll look for your account and send you a
										verification code email.
									</p>
									<div className="signup_input-container forget_input d-inline-block">
										<input
											id="forget_email"
											type="email"
											name="forget_email"
											autocomplete="email"
											placeholder="Enter Registrated Email"
											onChange={this.forgetEmailUpdate}
											required
											disabled={tokenSent}
										/>
										<label>Enter Registrated Email</label>
									</div>
									{tokenSent ? (
										<div className="signup_input-container forget_verification d-inline-block">
											<input
												id="verification_code"
												type="number"
												name="verification_code"
												autocomplete="off"
												placeholder="Enter Verification Code"
												onChange={this.codeVerification}
												required
											/>
											<label>Enter Verification Code</label>
										</div>
									) : null}
									{newPassword ? (
										<div className="row row-gap-tiny text-center">
											<div className="col-md-12 col-12 px-0">
												<div className="signup_input-container forget_verification d-inline-block">
													<input
														id="verification_password"
														type="text"
														name="verification_password"
														autocomplete="off"
														placeholder="Enter New Password"
														onChange={this.newPasswordEnterCode}
														required
													/>
													<label>Enter New Password</label>
												</div>
											</div>
											<div className="col-md-12 col-12 px-0">
												<input
													id="send_request"
													type="button"
													className="btn btn-block btn-primary btn-login center-block mb-half"
													value="Change Password"
													onClick={this.forgetPasswordChange}
													disabled={this.state.newPasswordValue.length < 6}
												/>
											</div>
										</div>
									) : null}
									<div className="row row-gap-tiny text-center btn_row">
										<div className="col-md-6 col-6 px-2">
											<button
												id="back"
												className="btn btn-block btn-primary btn-login center-block mb-half"
												onClick={this.forgetPasswordHide}
											>
												<i className="fas fa-angle-left" /> Go Back
											</button>
										</div>
										<div className="col-md-6 col-6 px-0">
											<input
												id="send_request"
												type="button"
												className="btn btn-block btn-primary btn-login center-block mb-half"
												value="Send Request"
												onClick={this.forgetPasswordSent}
												hidden={this.state.tokenSent}
											/>
										</div>
									</div>
								</div>
							) : null}
						</div>
					)}

					<div className="close_button" onClick={this.props.modalClosed}>
						<button onClick={this.hideSignUp}>
							<i className="fas fa-times" style={{ color: '#ccc' }} />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
