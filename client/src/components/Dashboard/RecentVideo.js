import React, { Component } from 'react';
import video from '../../images/videoThumbnail.jpg';


const RecentVideo = function(props) {
  return (
    <div className='recentVideo' onClick={props.playClickedVideo}>
      <img src={video} />
      <span className='recentVideoTitle'>{props.title}</span> <br />
      <span className='recentVideoCategory'>{props.category}</span>
    </div>
  )
}

export default RecentVideo;