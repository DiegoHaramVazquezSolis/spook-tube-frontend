import { uploadVideo } from "@/services/api";

beforeEach(() => {
  fetchMock.doMock();
});

it("calls the correct endpoint and returns the response on video upload", async () => {
  fetchMock.mockResponseOnce("Video uploaded successfully", {
    status: 200,
  });

  const video = new File(["video"], "video.webm", { type: "video/webm" });

  const response = await uploadVideo(video);

  expect(fetchMock).toHaveBeenCalledWith("https://fake-api/upload/video", expect.objectContaining({
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: expect.any(FormData),
  }));

  const responseData = await response.text();
  expect(responseData).toBe("Video uploaded successfully");

  // Assert the response status is OK
  expect(response.ok).toBe(true);
});

it("handles non-200 responses", async () => {
  // Mock a failed fetch response
  fetchMock.mockResponseOnce("Upload failed", {
    status: 500,
  });

  const video = new File(["video"], "video.webm", { type: "video/webm" });
  const response = await uploadVideo(video);

  // Assert the response status is not OK
  expect(response.ok).toBe(false);
  expect(response.status).toBe(500);
});
