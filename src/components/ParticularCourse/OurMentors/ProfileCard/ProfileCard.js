import React from 'react';

import './ProfileCard.scss';

const ProfileCard = ({ profile }) => {
	const mentor = profile;

	return (
		<div className="profile_Card">
			<div className="row px-0">
				<div className="name_pic">
					<img src={mentor.mentor_pic} alt={mentor.fullname} />
				</div>
				<div className="mentor_detail">
					<div className="user_name">{mentor.fullname}</div>
					<div className="details">{mentor.details}</div>
				</div>
				<div className="col-md-12 col-12 px-0 user_comment">{mentor.comments}</div>
			</div>
		</div>
	);
};

export default ProfileCard;
