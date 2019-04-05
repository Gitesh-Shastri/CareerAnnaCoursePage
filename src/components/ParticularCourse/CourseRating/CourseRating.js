import React, { Component } from 'react';

import axios from 'axios';

import './CourseRating.scss';

class CourseRating extends Component {
	state = {
		ratings: [
			{
				title: 'Satisfaction Index',
				percent: '95'
			},
			{
				title: ' Quality of Mocks',
				percent: '92'
			},
			{
				title: 'In-Depth Analysis',
				percent: '92'
			},
			{
				title: 'Doubt Solving',
				percent: '96'
			},
			{
				title: 'Mentorship',
				percent: '93'
			},
			{
				title: 'Quality of Content',
				percent: '97'
			}
		],
		average_ratings: '',
		learners: 2893,
		render: false
	};

	hideBar = () => {
		if (window.innerWidth > 650) {
			if (window.scrollY > 720) {
				this.setState({ render: false });
			} else if (window.scrollY > 100) {
				this.setState({ render: true });
			} else {
				this.setState({ render: false });
			}
		} else {
			if (window.scrollY > 1400) {
				this.setState({ render: false });
			} else if (window.scrollY > 550) {
				this.setState({ render: true });
			} else {
				this.setState({ render: false });
			}
		}
	};

	componentDidMount() {
		let product_id = this.props.product_id;
		const formData = new FormData();
		formData.append('product_id', product_id);

		axios
			.post('https://www.careeranna.com/websiteapi/getCourseIntroContent', formData)
			.then((response) => {
				let ratings = this.state.ratings.slice();
				ratings[0].percent = response.data.satisfaction_index;
				ratings[1].percent = response.data.quality_of_mocks;
				ratings[2].percent = response.data.in_depth_analysis;
				ratings[3].percent = response.data.doubt_solving;
				ratings[4].percent = response.data.mentorship;
				ratings[5].percent = response.data.quality_of_content;
				this.setState({
					average_ratings: response.data.ratings,
					learners: response.data.learners,
					ratings
				});
			})
			.catch((err) => {
				console.log(err);
			});
		window.addEventListener('scroll', this.hideBar);
	}

	formatRatings(rating) {
		var parts = rating.toString().split('.');
		return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
	}

	render() {
		const ratings = this.state.ratings;
		const render = this.state.render;
		const average_ratings = this.state.average_ratings;
		const learners = this.state.learners;

		return (
			<div className="CourseRating">
				<div className="row px-0">
					<div className="px-0 course_rating_left_wrapper">
						<h3>
							{average_ratings}
							<span className="slash">/</span>
							<span className="rating_off_5">5</span>
						</h3>
						<h4>ratings</h4>
						<h5>by {this.formatRatings(learners)} students</h5>
					</div>
					{render ? (
						<div className="col-md-9 col-12 row px-0 course_rating_right_wrapper">
							{ratings.map((particular_rating, i) => (
								<div className="col-md-6 col-12 row" key={i}>
									<div className="col-md-6 col-xs-12 pl-0 rating_name">{particular_rating.title}</div>
									<div className="col-md-4 col-10 px-0">
										<div className="progress">
											<div
												className="progress-bar "
												style={{ width: `${particular_rating.percent}%` }}
											/>
										</div>
									</div>
									<div className="col-md-1 col-2 percent pl-2">{particular_rating.percent}%</div>
								</div>
							))}
						</div>
					) : (
						<div className="col-md-9 col-12 row px-0 course_rating_right_wrapper">
							{ratings.map((particular_rating, i) => (
								<div className="col-md-6 col-12 px-0 row" key={i}>
									<div className="col-md-6 col-xs-12 pl-0 rating_name">{particular_rating.title}</div>
									<div className="col-md-4 col-10 px-0">
										<div className="progress">
											<div className="progress-bar" style={{ width: '0%' }} />
										</div>
									</div>
									<div className="col-md-1 col-2 percent pl-2">{particular_rating.percent}%</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default CourseRating;
