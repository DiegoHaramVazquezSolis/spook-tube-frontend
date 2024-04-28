"use client"
import React, { useEffect, useRef, useState } from 'react';

import { VideoPlayer } from '@/components/VideoPlayer';
import { VideoCommentsSection } from '@/components/VideoCommentsSection';

const WatchVideoPage = ({ params: { videoId } }: { params: { videoId: string } }) => {
  const [videoSrc, setVideoSrc] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function fetchVideoUrl() {
      const url = await new Promise((resolve) => {
        setTimeout(() => resolve("https://media.w3.org/2010/05/sintel/trailer.webm"), 1000);
      });

      setVideoSrc(url as string);
      videoRef.current?.load();
    }

    fetchVideoUrl();
  }, [videoId]);

  return (
    <main
      className="grow grid grid-cols-1 md:grid-cols-2 grid-flow-col items-center justify-center overflow-hidden max-h-[cacl(100vh-56px)]"
    >
      <VideoPlayer
        src={videoSrc}
        videoRef={videoRef}
      />
      <VideoCommentsSection />
    </main>
  );
};

export default WatchVideoPage;