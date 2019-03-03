import React from 'react';
import './Card.css';

const Card = ({ review, current_page }) => {
	const { rating, fullname, comments, index } = review;
	let css_class = 'review_card';
	if (index < current_page) {
		css_class = 'review_card hide';
	}

	return (
		<div className={css_class} id={`card-${index}`}>
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
				<div className="col-md-12 col-12 px-0 user_comment">{comments.substring(0, 190) + '...'}</div>
			</div>
		</div>
	);
};

export default Card;
