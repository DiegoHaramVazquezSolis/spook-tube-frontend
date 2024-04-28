import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const VideoCommentsSection = () => {
  return (
    <section
      className="h-full flex flex-col"
      data-testid="comments-section"
    >
      <div className="grow flex flex-col pl-1.5 pt-1.5 gap-4">
        <h3 className="text-xl uppercase text-slate-950 tracking-wide h-7">
          Comments
        </h3>
        <ScrollArea.Root className="grow">
          {/* Screen height - Navbar height - "Comments" title height - "Add a comment" component height - top padding */}
          <ScrollArea.Viewport className="max-h-[calc(100vh-56px-28px-48px-6px)]">
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
      <div className="flex items-center justify-between bg-slate-50 px-1.5 h-12 box-content gap-2">
        <span className="text-xl uppercase text-slate-950 tracking-wide text-ellipsis overflow-hidden whitespace-nowrap text-overflow-ellipsis">
          Views: 640
        </span>
        <input
          type="text"
          className="border-2 rounded w-full max-w-[75%] pl-2 text-xl text-slate-950 bg-slate-50"
          placeholder="Type your comment..."
        />
      </div>
    </section>
  );
};

export {
  VideoCommentsSection
};