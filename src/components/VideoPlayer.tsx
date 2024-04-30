import React, { RefObject } from 'react';

interface VideoPlayerProps {
  videoRef?: RefObject<HTMLVideoElement>;
  src: string;
}

const VideoPlayer = ({ src, videoRef }: VideoPlayerProps) => {
  return (
    <video
      ref={videoRef}
      autoPlay
      controls
      className="h-full w-full object-cover"
      data-testid="video-player"
    >
      <source
        src={src}
        type="video/webm"
      />
    </video>
  );
};

export {
  VideoPlayer
};