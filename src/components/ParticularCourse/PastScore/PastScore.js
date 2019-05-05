import React, { Component } from 'react';

import axios from 'axios';
import './PastScore.css';
import { TextDecoder } from 'util';

class PastScore extends Component {
	state = {
		scores: [],
		submit: true,
		request: {
			name: {
				value: '',
				isValid: true,
				isTouched: false
			},
			email: {
				value: '',
				isValid: false,
				isTouched: false
			},
			mobile: {
				value: '',
				isValid: false,
				isTouched: false
			},
			product_id: '216',
			isLoading: true
		}
	};

	componentDidMount() {
		axios
			.get('https://www.careeranna.com/websiteapi/get_past_score')
			.then((response) => {
				this.setState({ scores: response.data, isLoading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	capitalize(s) {
		return s.toLowerCase().replace(/\b./g, function(a) {
			return a.toUpperCase();
		});
	}

	changeNameSubmit = (event) => {
		let request = this.state.request;
		request.name.value = this.capitalize(event.target.value);
		if (request.name.value.length >= 2) {
			request.name.isTouched = true;
		}
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
		if (request.email.value.length >= 5) {
			request.email.isTouched = true;
		} else {
			request.email.isTouched = false;
		}
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
		if (request.mobile.value.length >= 9) {
			request.mobile.isTouched = true;
		}
		if (!(request.mobile.value.match('[7-9][0-9]{9}') == null)) {
			request.mobile.isValid = true;
		} else {
			request.mobile.isValid = false;
		}
		this.setState({ submit: false, request: request });
	};

	renderSwitch(course_name) {
		switch (course_name) {
			case 'Online CAT Coaching':
				return 'https://www.careeranna.com/online-cat-coaching/';
			case 'CAT LRDI Course':
				return 'https://careeranna.com/Online-CAT-LR-DI-Course/';
			case 'CAT Verbal Ability Coaching':
				return 'https://careeranna.com/Online-CAT-Verbal-Course/';
			case 'CAT Quant Course':
				return 'https://careeranna.com/Online-CAT-Quant-Course/';
			default:
				return '#';
		}
	}

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
			axios({
				method: 'post',
				url: 'https://www.careeranna.com/cmarket/requestCall',
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
		const scores = this.state.scores;
		const isLoading = this.state.isLoading;

		return (
			<div className="past_score" id="pastScore">
				<div className="pastScore_heading">
					Past Results{' - '}
					Top 50 Scores by our CAT 2018 Students (Online CAT Coaching is the Complete MBA Prep With GDPI)
				</div>
				{isLoading ? (
					<div id="preloader">
						<div id="loader" />
					</div>
				) : null}
				<table>
					<thead>
						<tr>
							<th>Course Enrolled</th>
							<th>VA RC Percentile</th>
							<th>DI LR Percentile</th>
							<th>Quant Percentile</th>
							<th>Overall Percentile</th>
						</tr>
					</thead>
					<tbody>
						{scores.map((score, i) => (
							<tr key={i}>
								<td style={{ textAlign: 'left' }}>
									<a href={this.renderSwitch(score.CourseEnrolled)}>{score.CourseEnrolled}</a>
								</td>
								<td>{score.VARCPercentile}</td>
								<td>{score.DILRPercentile}</td>
								<td>{score.QuantPercentile}</td>
								<td>{score.OverallPercentile}</td>
							</tr>
						))}
					</tbody>
				</table>
				{/* <div className="requestForm">
                    <div className="request">
                        Request a free Call Back
                    </div>
                    <form className="request_form row px-0" onSubmit={this.submitRequest}>
                    <div className="col-md-7 col-12 px-0">
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon"><i className="far fa-user"></i></div>
                    <input type="text" name="name" autoComplete="off" className={request.name.isTouched&&!request.name.isValid?'error':''} id="name" placeholder="Full Name" onChange={this.changeNameSubmit} required />
                    {
                        request.name.isTouched&&!request.name.isValid?
                        <small>Name cannot have special character/number, Please re-enter</small>:null
                    }
                    </div>
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon">+91</div>
                    <input type="text" pattern="[7-9][0-9]{9}" maxLength="10" autoComplete="off" name="mobile" className={request.mobile.isTouched&&!request.mobile.isValid?'error':''} id="mobile" placeholder="Contact Number" onChange={this.changePhoneSubmit} required />
                    {
                        request.mobile.isTouched&&!request.mobile.isValid?
                        <small>Please Enter Valid Number</small>:null
                    }
                    </div>
                    <div className="col-12 col-md-12 px-0 input-group">
                    <div className="input-group-addon">@</div>
                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete="off" name="email" className={request.email.isTouched&&!request.email.isValid?'error':''}  id="email" placeholder="Enter your email" onKeyPress={this.changeEmailSubmit} required />
                    {
                        request.email.isTouched&&!request.email.isValid?
                        <small>Please Enter Valid Email</small>:null
                    }
                    </div>
                    </div>
                    <input type="text" name="product_id" value="216" hidden/>
                    <div className="col-md-5 col-12 px-0">
                    <button className={!(request.name.isValid&&request.mobile.isValid&&request.email.isValid)?'submit_request disabled':'submit_request'} hidden={submit} >Send Request</button>
                    </div>
                    </form>
                </div> */}
			</div>
		);
	}
}

export default PastScore;
