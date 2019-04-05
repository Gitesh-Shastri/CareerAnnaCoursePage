import React from 'react';
import './Card.scss';

const Card = ({ review }) => {
	const { fullname, comments, index } = review;
	let css_class = 'review_card';

	return (
		<div className={css_class} id={`card-${index}`}>
			{fullname.length > 0 ? (
				<div className="row px-0">
					<div id="name_pic">
						<div id="name_initial">{fullname.charAt(0)}</div>
					</div>
					<div className="col-md-10 col-9 px-0 ">
						<div className="user_name">{fullname}</div>
						<div className="rating">
							<div className="rating_star">
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<img src="https://careeranna.com/home/static/media/cat/star_blue.png" alt="" />
								<div className="rating_text colorBlue d-inline-block">
									<span>5</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12 col-12 px-0 user_comment">
						{comments.length > 180 ? comments.substring(0, 180) + '...' : comments.substring(0, 180)}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Card;
