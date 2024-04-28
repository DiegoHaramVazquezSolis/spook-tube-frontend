import { render, waitFor } from "@testing-library/react";

import { VideoPlayer } from "@/components/VideoPlayer";

describe("Video Player", () => {
  it("Should render video with right source", async () => {
    const { getByTestId } = render(
      <VideoPlayer
        src="https://fake-video-src.webm"
      />
    );

    const videoPlayer = getByTestId('video-player');
    const source = videoPlayer.querySelector('source');

    expect(source).toBeInTheDocument();
    expect(source).toHaveAttribute('src', "https://fake-video-src.webm");
  });
});