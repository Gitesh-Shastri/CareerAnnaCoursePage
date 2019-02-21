import React, { Component } from 'react';
import './Card.css';

const Card = ({Video}) => {  
    const {video_url,
        index
    } = Video;  
    return (
        <div className="video_player_card" id={`card-${index}`}>
            <div class="row">
                <div class="col-md-12 col-xs-12 video_frame">
                <iframe src={video_url} allow="autoplay; encrypted-media" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                </div>
        </div>
        </div>
    );
}

export default Card;
