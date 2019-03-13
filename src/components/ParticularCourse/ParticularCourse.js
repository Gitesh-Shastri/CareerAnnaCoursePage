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

class ParticularCourse extends Component {
	render() {
		return (
			<div name="ParticularCourse">
				<CourseContent />
				<CourseRating />
				<ReviewSection />
				<CourseOverView />
				<MainVideoSlider title="Demo" />
				<TrendingCourse />
				<OurMentors />
				<FAQ />
				<PastScore />
			</div>
		);
	}
}

export default ParticularCourse;
