import React, { useState } from 'react';

interface VideoPlayerProps 
{
    selectedVideo: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ selectedVideo }) => {
    return (
      <video width="640" height="360" controls>
        <source src={`/../Videos/${selectedVideo}`} type={`video/${selectedVideo.split('.').pop()}`} />
        Your browser does not support the video tag.
      </video>
    );
  };

export default VideoPlayer