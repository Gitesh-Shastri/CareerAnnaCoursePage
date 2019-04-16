import React, { Component } from 'react';
import './TrendingCourse.scss';

import Card from './Card/Card';
import axios from 'axios';

class TrendingCourse extends Component {
	state = {
		courses: [],
		course: {},
		isLoading: true,
		product_id: this.props.product_id
	};

	componentDidMount() {
		const formData = new FormData();
		formData.append('product_id', this.state.product_id);

		axios.post('https://www.careeranna.com/websiteapi/getCatRelatedCourse', formData).then((response) => {
			this.setState({ courses: response.data, course: response.data[0], isLoading: false });
		});
	}

	nextProperty = () => {
		if (this.state.course.index !== this.state.courses.length - 2) {
			const newIndex = this.state.course.index + 1;
			this.setState({
				course: this.state.courses[newIndex]
			});
		}
	};

	prevProperty = () => {
		if (this.state.course.index > 0) {
			const newIndex = this.state.course.index - 1;
			this.setState({
				course: this.state.courses[newIndex]
			});
		}
	};

	render() {
		const course = this.state.course;

		const courses = this.state.courses;
		const isLoading = this.state.isLoading;

		return (
			<div className="TrendingCourse" id="related_courses">
				<div className="row">
					<div className="trendingCourseCard">
						<div className="trendingCourseCardInside row">
							<div className="upperheading">
								<div className="trendingheading">RELATED</div>
								<div className="trendingsubheading">COURSES</div>
								<hr className="trending_line" />
							</div>
						</div>
					</div>
					<button className="next_video_prev_video" onClick={() => this.prevProperty()}>
						<i className="fa fa-angle-left" />
					</button>
					<div className="course_course_list">
						{isLoading ? (
							<div id="preloader">
								<div id="loader" />
							</div>
						) : null}
						<div
							className="trending_playlist"
							style={{
								transform: `translateX(-${course.index * (100 / courses.length)}%)`
							}}
						>
							{courses.map((particular_course, i) => (
								<Card key={i} course={particular_course} current_index={course.index} />
							))}
						</div>
					</div>
					<div className="arrow_right">
						<button
							className="next_video_right_video"
							onClick={() => this.nextProperty()}
							disabled={course.index === courses.length - 2}
							hidden={course.index === courses.length - 2}
						>
							<i className="fa fa-angle-right" />
						</button>
					</div>
					<div className="col-12 arrow_small">
						<button
							className="next_video_prev_small"
							onClick={() => this.prevProperty()}
							disabled={course.index === 0}
							hidden={course.index === 0}
						>
							<i className="fa fa-caret-left" />
						</button>
						<button
							className="next_video_right_small float-right"
							onClick={() => this.nextProperty()}
							disabled={course.index === courses.length - 2}
							hidden={course.index === courses.length - 2}
						>
							<i className="fa fa-caret-right" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default TrendingCourse;
