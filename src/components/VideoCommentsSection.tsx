import React from 'react';

const VideoCommentsSection = () => {
  return (
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
  );
};

export {
  VideoCommentsSection
};