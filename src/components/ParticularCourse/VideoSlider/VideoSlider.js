import React, { Component } from "react";

import "./VideoSlider.css";
import Card from './Card/Card';

class VideoSlider extends Component {

    constructor(props){
		super(props);
		this.state = {
			videos_playlist: [
                {
                    video_url: "https://www.youtube.com/embed/fK0Hqhq86Bg?ecver=2",
                    index: 0,
                },{
                    video_url: "https://www.youtube.com/embed/Odw8S0WExac?ecver=2",
                    index: 1,
                },{
                    video_url: "https://www.youtube.com/embed/6ussc-htZtc?ecver=2",
                    index: 2,
                },{
                    video_url: "https://www.youtube.com/embed/B9-2GqctIyE?ecver=2",
                    index: 3,
                }
            ],
            video_item: {
                video_url: "https://www.youtube.com/embed/fK0Hqhq86Bg?ecver=2",
                index: 0,
            },
            disabled: true		
		}
	}

	nextProperty = () => {
		if(this.state.video_item.index != undefined){
			const newIndex = this.state.video_item.index+1;
			this.setState({
				video_item: this.state.videos_playlist[newIndex]
			})
		}
  }

  prevProperty = () => {
    const newIndex = this.state.video_item.index-1;
    this.setState({
			video_item: this.state.videos_playlist[newIndex]
    })
  }


  render() {
	const {videos_playlist, video_item} = this.state;
    
    return (
    <section class="video_slider row" id="video">
			<div class={`video_card_view active-video-slide-${video_item.index}`}>
			<div class="video_view_wrapper" style={{
				'transform': `translateX(-${video_item.index*(100/videos_playlist.length)}%)`
			}}>
					{
						videos_playlist.map((video_item, i) => 
						<Card key={i} Video = {video_item}/>)
					}
				</div>
			</div>
            <div class="col-md-12 hidden-lg hidden-xs col-xs-12 video_card_view_small">
                <div class="col-xs-1"></div>
                <div class="col-xs-8">
                    <Card key={video_item.index} Video = {video_item}/>
                </div>
                <div class="col-xs-2"></div>
            </div>
            <div class="col-md-12 col-xs-12 arrow_video">
			<button 
					class="next_video_left video_prev"
					onClick={() => this.prevProperty()} 
					disabled={video_item.index==0}
					hidden={video_item.index==0}
				><i class='fa fa-caret-left'></i></button>
			 <button 
			 		class="next_video_right video_next"
					onClick={() => this.nextProperty()} 
					disabled={video_item.index==videos_playlist.length-1}
					hidden={video_item.index==videos_playlist.length-1}
        ><i class='fa fa-caret-right'></i></button>
			</div>
    </section>
    );
  }
}
export default VideoSlider;
