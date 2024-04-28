import React from "react";
import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";

const VideoCommentsList = () => {
  return (
    <div className="grow flex flex-col pl-1.5 pt-1.5 gap-4">
      <h3 className="text-xl uppercase text-slate-950 tracking-wide h-7">
        Comments
      </h3>
      <Root className="grow">
        {/* Screen height - Navbar height - "Comments" title height - "Add a comment" component height - top padding */}
        <Viewport className="max-h-[calc(100vh-56px-28px-48px-6px)]">
        </Viewport>
        <Scrollbar orientation="vertical">
          <Thumb />
        </Scrollbar>
      </Root>
    </div>
  );
};

export {
  VideoCommentsList
};