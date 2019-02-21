import React from 'react';
import './Card.css';

const Card = ({review, current_page}) => {  
  const {
  rating,
  fullname,
  comments,
  index,} = review;  
  let css_class = "review_card";
  
    return (
        <div className={css_class} id={`card-${index}`} >
            <div class="row px-0">
                <div class="col-md-2 col-3 px-0">
                        <div id="name_pic">
                                <div id="name_initial">
                                    {fullname.charAt(0)}
                                 </div>
                              </div>
                </div>
                <div class="col-md-10 col-9 px-0 ">
                    <div class="user_name">{fullname}</div>
                    <div class="rating">
                            <div class="rating_star">
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span>
                                <span class="fa fa-star colorBlue"></span> 
                                <span class="fa fa-star colorBlue"></span>       
                                <span class="rating_text colorBlue">{rating}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-12 px-0 user_comment">{comments}</div>
            </div>
        </div>
    );
}

export default Card;
