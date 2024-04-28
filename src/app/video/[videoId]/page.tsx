"use client"
import React, { useEffect, useRef, useState } from 'react';

const WatchVideoPage = ({ params: { videoId } }: { params: { videoId: string } }) => {
  const [linkUrl, setLinkUrl] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function fetchVideoUrl() {
      const url = await new Promise((resolve) => {
        setTimeout(() => resolve("https://media.w3.org/2010/05/sintel/trailer.webm"), 1000);
      });

      setLinkUrl(url as string);
      videoRef.current?.load();
    }

    fetchVideoUrl();
  }, [videoId]);

  return (
    <main className="grow grid grid-cols-1 md:grid-cols-2 grid-flow-col items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        controls
        className="h-full w-full object-fill"
        data-testid="video-section"
      >
        <source
          src={linkUrl}
          type="video/webm"
          />
      </video>
      <section
        className="h-full flex flex-col self-stretch"
        data-testid="comments-section"
      >
        <div className="grow flex flex-col pl-1.5 pt-1.5 gap-8">
          <h3 className="text-2xl uppercase text-slate-950 tracking-wide">
            Comments
          </h3>
          <div className="grow overflow-y-scroll"></div>
        </div>
        <div className="bg-slate-50 h-12 w-full"></div>
      </section>
    </main>
  );
};

export default WatchVideoPage;