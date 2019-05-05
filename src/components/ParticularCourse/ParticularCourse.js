import React, { Component } from 'react';

import './ParticularCourse.css';

import CourseRating from './CourseRating/CourseRating';
import CourseOverView from './CourseOverView/CourseOverView';
import ReviewSection from './Review_Section/Review_Section';
import FAQ from './FAQ/FAQ';
import MainVideoSlider from './MainVideoSlider/MainVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import CourseContent from './CourseContent/CourseContent';
import PastScore from './PastScore/PastScore';
import OurMentors from './OurMentors/OurMentors';
import InformationGathering from './InformationGathering/InformationGathering';

class ParticularCourse extends Component {
	state = {
		product_id: '216'
	};

	render() {
		return (
			<div name="ParticularCourse">
				<CourseContent product_id={this.state.product_id} />
				<CourseRating product_id={this.state.product_id} />
				<ReviewSection product_id={this.state.product_id} />
				<CourseOverView product_id={this.state.product_id} />
				<MainVideoSlider title="Demo" product_id={this.state.product_id} />
				<TrendingCourse product_id={this.state.product_id} />
				<OurMentors product_id={this.state.product_id} />
				<FAQ />
				<PastScore />
				<InformationGathering />
			</div>
		);
	}
}

export default ParticularCourse;
