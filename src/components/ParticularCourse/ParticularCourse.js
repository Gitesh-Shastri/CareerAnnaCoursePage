import React, { Component } from 'react';

import './ParticularCourse.css';

import CourseIntro from './CourseIntro/CourseIntro';
import CourseRating from './CourseRating/CourseRating';
import ReviewSection from './Review_Section/Review_Section';
import Course_content from './Course_content/Course_content';
import FAQ from './FAQ/FAQ';
import MainVideoSlider from './MainVideoSlider/MainVideoSlider';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import CourseContent from './CourseContent/CourseContent';
import PastScore from './PastScore/PastScore';

class ParticularCourse extends Component {
	render() {
		return (
			<div name="ParticularCourse">
				<CourseContent />
				<CourseRating />
				<ReviewSection />
				<Course_content />
				<MainVideoSlider title="Demo" />
				<TrendingCourse />
				<FAQ />
				<PastScore />
			</div>
		);
	}
}

export default ParticularCourse;
