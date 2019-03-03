import React, { Component } from 'react';

import './SignUpModel.scss';
import BackDrop from '../BackDrop/BackDrop';

export default class SignUpModel extends Component {
	state = {
		showSignUp: false
	};

	showSignUp = () => {
		this.setState({ showSignUp: true });
	};

	hideSignUp = () => {
		if (this.state.showSignUp) {
			this.setState({ showSignUp: false });
		}
		this.props.modalClosed();
	};

	render() {
		const showSignUp = this.state.showSignUp;

		return (
			<div>
				<BackDrop show={this.props.show} clicked={this.props.modalClosed} hideSignUpBack={this.hideSignUp} />
				<div
					className="LoginModel"
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
						opacity: this.props.show ? '1' : '0'
					}}
				>
					{!showSignUp ? (
						<form className="login_from">
							<div className="heading">Login/Register</div>
							<hr />
							<div className="input-container">
								<button className="button-social">
									<div className="button-label">
										<img src="https://www.careeranna.com/img/facebook_icon.png" /> Facebook
									</div>
								</button>
								<button className="button-social float-right">
									<div className="button-label">
										<img src="https://www.careeranna.com/img/google-1015752_960_720.png" />Google
									</div>
								</button>
							</div>
							<div className="input-container">
								<input
									id="login_email"
									type="email"
									className="w100"
									name="email"
									placeholder="Email Id"
									autocomplete="email"
									required
								/>
							</div>
							<div className="input-container">
								<input
									id="login_password"
									type="password"
									autocomplete="off"
									className="w100"
									name="password"
									placeholder="Password"
									required
								/>
							</div>
							<div className="row row-gap-tiny text-center">
								<input
									id="login_Id"
									type="button"
									className="btn btn-block btn-primary btn-login center-block mb-half"
									onclick="loginUsingUserDetails();"
									value="Sign In"
								/>
								<a href="#" id="forgotPassword" className="disclaimer blue forgot-link clean">
									Forgot Your Password?
								</a>
							</div>
							<div>
								<hr />
								<p className="black-text center login-modal-footer">
									Don't have an account?{' '}
									<a className="opensignupmodalPopup" onClick={this.showSignUp}>
										SignUp now
									</a>
								</p>
							</div>
						</form>
					) : (
						<form className="login_from">
							<div className="heading">Login/Register</div>
							<hr />
							<h4 className="create_account_heading">Create Your Student Account</h4>
							<div className="signup_input-container d-inline-block">
								<input
									id="signup_name"
									type="text"
									className="w100"
									name="name"
									placeholder="Full Name"
									autocomplete="off"
									required
								/>
							</div>
							<div className="signup_input-container d-inline-block float-right">
								<input
									id="signup_email"
									type="email"
									className="w100"
									name="email"
									placeholder="Email"
									autocomplete="email"
									required
								/>
							</div>
							<div className="signup_input-container d-inline-block">
								<input
									id="signup_passqword"
									type="password"
									className="w100"
									name="password"
									placeholder="Password"
									autocomplete="off"
									required
								/>
							</div>
							<div className="signup_input-container d-inline-block float-right">
								<input
									id="signup_mobile"
									type="text"
									className="w100"
									name="phone"
									placeholder="Phone No."
									inputmode="phone"
									pattern="[0-9]{10}"
									maxLength="10"
									autocomplete="off"
									required
								/>
							</div>
							<div className="signup_input-container d-inline-block">
								<input
									id="signup_city"
									type="text"
									className="w100"
									name="city"
									placeholder="City Name"
									autocomplete="city"
									required
								/>
							</div>
							<div className="signup_input-container d-inline-block float-right">
								<select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="howtoknow">
									<option selected>How did you come to know about us</option>
									<option value="Facebook">Facebook</option>
									<option value="Reffered by Friend">Referred by Friend</option>
									<option value="Google Search">Google Search</option>
									<option value="Quora">Quora</option>
									<option value="Direct">Direct</option>
									<option value="Social Media">Mail</option>
								</select>
							</div>
							<div class="terms-wrap">
								<input type="checkbox" name="tos_accepted" id="tos" required />
								<span
									style={{
										marginLeft: '5px',
										lineHeight: '1.7rem',
										position: 'relative',
										top: '2px',
										fontWeight: 'bold'
									}}
								>
									I agree to the{' '}
									<a
										style={{ color: '#1989cd' }}
										href="https://www.careeranna.com/chome/privacypolicy"
										target="_blank"
									>
										Terms of Service
									</a>
								</span>
							</div>
							<div className="row row-gap-tiny text-center">
								<input
									id="signup_Id"
									type="button"
									className="btn btn-block btn-primary btn-login center-block mb-half"
									onclick="loginUsingUserDetails();"
									value="Sign In"
								/>
							</div>
						</form>
					)}

					<div className="close_button" onClick={this.props.modalClosed}>
						<button onClick={this.hideSignUp}>
							<i className="fas fa-window-close" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}
