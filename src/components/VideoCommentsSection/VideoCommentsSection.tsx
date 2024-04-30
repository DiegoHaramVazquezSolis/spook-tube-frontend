import React from "react";

import { VideoCommentsList } from "@/components/VideoCommentsSection/VideoCommentsList";
import { CreateCommentInput } from "@/components/VideoCommentsSection/CreateCommentInput";

const VideoCommentsSection = () => {
  return (
    <section
      className="absolute bottom-0 top-auto left-0 right-0 h-1/3 flex flex-col md:relative md:h-full"
      data-testid="comments-section"
    >
      <VideoCommentsList />
      <CreateCommentInput />
    </section>
  );
};

export {
  VideoCommentsSection
};