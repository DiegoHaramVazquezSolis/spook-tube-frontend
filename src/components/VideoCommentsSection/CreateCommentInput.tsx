import React from "react";

const CreateCommentInput = () => {
  return (
    <div className="flex items-center justify-between bg-slate-50 px-1.5 h-12 box-content gap-2">
      <span className="text-xl uppercase text-slate-950 tracking-wide text-ellipsis overflow-hidden whitespace-nowrap text-overflow-ellipsis">
        Views: 640
      </span>
      <input
        type="text"
        className="border-2 rounded w-full max-w-[75%] pl-2 text-xl text-slate-950 bg-slate-50"
        placeholder="Type your comment..."
        data-testid="comment-input"
      />
    </div>
  );
};

export {
  CreateCommentInput
};