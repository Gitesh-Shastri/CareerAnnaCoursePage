import React from 'react';
import './Card.css';

const Card = ({ course, current_index }) => {
	let learners = course.course.learners_count;
	let rating = course.course.average_rating;

	return (
		<div className="Coursecard" id={`card-${course.index}`}>
			<div className="row">
				<div className="items trending_course">
					<a href={'https://careeranna.com/' + course.course.course_name.replace(/ /g, '-')}>
						<img
							src={'https://careeranna.com/' + course.course.product_image}
							className="pic"
							alt={course.course.course_name}
						/>
						<div className="course_heading">{course.course.course_name}</div>
						<div className="rating">
							<div className="rating_star colorBlue">
								<span className="rating_percent">{rating.substring(0, 3)} &nbsp;</span>
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
							</div>
						</div>
						<div className="course_views">
							<i className="fa fa-users" aria-hidden="true" /> &nbsp;{learners}+ Learners
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
