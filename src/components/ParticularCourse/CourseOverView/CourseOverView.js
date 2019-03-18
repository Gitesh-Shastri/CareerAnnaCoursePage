import React, { Component } from 'react';
import './CourseOverView.scss';

import axios from 'axios';

export default class CourseOverView extends Component {
	state = {
		cousrse_over_view: [],
		isLoading: true
	};

	componentDidMount() {
		let product_id = this.props.product_id;
		const formData = new FormData();
		formData.append('product_id', product_id);

		axios
			.post('https://www.careeranna.com/websiteapi/getCourseOverView', formData)
			.then((response) => {
				this.setState({ cousrse_over_view: response.data, isLoading: false });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const cousrse_over_views1 = this.state.cousrse_over_view.slice(0, 2);
		const cousrse_over_views2 = this.state.cousrse_over_view.slice(2);
		const isLoading = this.state.isLoading;

		return (
			<div className="coursecontent">
				<div className="row px-0">
					<h2 className="col-md-12 col-12 px-0 heading">
						CAT 2019 Coaching <span style={{ fontWeight: '300' }}>Course Content</span>
					</h2>

					{isLoading ? (
						<div id="preloader">
							<div id="loader" />
						</div>
					) : null}
					<div className="col-md-6 px-0 col-12 left">
						{cousrse_over_views1.map((cousrse_over_view, i) => (
							<div className="col-md-12 col-12 content-tab px-0" key={i}>
								<h2>{cousrse_over_view.heading}</h2>
								<div dangerouslySetInnerHTML={{ __html: cousrse_over_view.list }} />
							</div>
						))}
					</div>
					<div className="col-md-6 px-0 col-12 right">
						{cousrse_over_views2.map((cousrse_over_view, i) => (
							<div className="col-md-12 col-12 content-tab px-0" key={i}>
								<h2>{cousrse_over_view.heading}</h2>
								<div dangerouslySetInnerHTML={{ __html: cousrse_over_view.list }} />
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
