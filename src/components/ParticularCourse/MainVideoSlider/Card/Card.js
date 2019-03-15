import React from 'react';
import './Card.css';

const Card = ({ Video }) => {
	const { video_url_image, video_index, title } = Video;

	let css_class = 'video_player_demo_card';
	return (
		<div className={css_class} id={`trending_demo_card-${video_index}`}>
			<div className="row">
				<div className="col-md-12 col-xs-12 video_frame">
					<img src={'https://www.careeranna.com/assets/cat_video_images/' + video_url_image} alt={title} />
				</div>
				<div className="video_title">{title}</div>
			</div>
		</div>
	);
};

export default Card;
