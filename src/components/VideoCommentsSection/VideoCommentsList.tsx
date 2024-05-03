import React from "react";
import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";

import { CreateCommentInput } from "@/components/VideoCommentsSection/CreateCommentInput";

const VideoCommentsList = () => {
  return (
    <div className="grow flex flex-col pt-1.5">
      <h3 className="text-xl uppercase text-slate-50 md:text-slate-950 tracking-wide h-7 pl-1.5 mb-4">
        Comments
      </h3>
      <Root className="h-[20vh] md:max-h-full md:grow pl-1.5">
        {/* Screen height - Navbar height - "Comments" title height - "Add a comment" component height - top padding */}
        <Viewport className="h-full md:max-h-[calc(100vh-56px-28px-48px-6px)]">
        </Viewport>
        <Scrollbar orientation="vertical">
          <Thumb />
        </Scrollbar>
      </Root>
      <CreateCommentInput />
    </div>
  );
};

export {
  VideoCommentsList
};