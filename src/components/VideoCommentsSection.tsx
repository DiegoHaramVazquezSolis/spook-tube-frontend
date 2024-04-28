import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const VideoCommentsSection = () => {
  return (
    <section
      className="h-full flex flex-col self-stretch"
      data-testid="comments-section"
    >
      <div className="grow flex flex-col pl-1.5 pt-1.5 gap-4">
        <h3 className="text-2xl uppercase text-slate-950 tracking-wide h-8">
          Comments
        </h3>
        <ScrollArea.Root>
          {/* Screen height - Navbar height - "Comments" title height - "Add a comment" component height - top padding */}
          <ScrollArea.Viewport className="max-h-[calc(100vh-56px-32px-48px-6px)]">
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="vertical">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
      <div className="bg-slate-50 h-12 w-full"></div>
    </section>
  );
};

export {
  VideoCommentsSection
};