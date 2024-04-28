import React from "react";

import { VideoCommentsList } from "@/components/VideoCommentsSection/VideoCommentsList";
import { CreateCommentInput } from "@/components/VideoCommentsSection/CreateCommentInput";

const VideoCommentsSection = () => {
  return (
    <section
      className="h-full flex flex-col"
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