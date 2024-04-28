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

    expect(video).toBeInTheDocument();
    expect(comments).toBeInTheDocument();
  });
});