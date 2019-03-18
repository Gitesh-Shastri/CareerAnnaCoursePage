import React, { Component } from 'react';

import './OurMentors.scss';

import ProfileCard from './ProfileCard/ProfileCard';
import Axios from 'axios';

export default class OurMentors extends Component {
	state = {
		mentors: []
	};

	componentDidMount() {
		let product_id = this.props.product_id;
		let formData = new FormData();
		formData.append('product_id', product_id);

		Axios.post('https://careeranna.com/websiteapi/getMentors', formData)
			.then((response) => {
				this.setState({ mentors: response.data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const mentors = this.state.mentors;

		return (
			<div className="OurMentors">
				<div className="row px-0">
					<div className="col-md-12 title">Mentors</div>
					<div className="col-md-12 mentors_list row">
						{mentors.map((mentor, i) => (
							<div className="col-md-6 col-12 profile_small pr-1" key={i}>
								<ProfileCard profile={mentor} />
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
