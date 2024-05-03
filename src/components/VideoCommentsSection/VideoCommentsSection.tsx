import React from "react";

import { VideoCommentsList } from "@/components/VideoCommentsSection/VideoCommentsList";

const VideoCommentsSection = () => {
  return (
    <section
      className="absolute bottom-6 left-0 right-0 h-1/3 flex flex-col md:relative md:h-full md:bottom-0"
      data-testid="comments-section"
    >
      <VideoCommentsList />
    </section>
  );
};

export {
  VideoCommentsSection
};