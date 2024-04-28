import { render } from "@testing-library/react";

import WatchVideoPage from "@/app/video/[videoId]/page";

describe("Watch video", () => {
  it("Should render video and comments sections", () => {
    const { getByTestId } = render(
      <WatchVideoPage
        params={{
          videoId: 'test-video-id'
        }} />
    );

    const video = getByTestId("video-player");
    const comments = getByTestId("comments-section");
    const commentInput = getByTestId("comment-input");

    expect(video).toBeInTheDocument();
    expect(comments).toBeInTheDocument();
    expect(commentInput).toBeInTheDocument();
  });
});