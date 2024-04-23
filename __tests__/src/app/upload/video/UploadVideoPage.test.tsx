import { render, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "sonner";

import * as api from "@/services/api";

import UploadVideoPage from "@/app/upload/video/page";

jest.mock("./../../../../../src/services/api");

jest.mock('sonner', () => ({
  toast: {
    error: jest.fn(),
    loading: jest.fn(),
    success: jest.fn(),
    dismiss: jest.fn(),
  },
}));

describe("Upload single video to SpookTube", () => {
  it("Should call toast error when uploading a very big video", () => {
    const { getByLabelText } = render(
      <UploadVideoPage />
    );

    const input = getByLabelText(/Click here to upload files/i);
    const file = new File([new ArrayBuffer(10485761)], 'example.webm', { type: 'video/webm' });

    const files = [file];

    fireEvent.change(input, { target: { files } });

    expect(toast.error).toHaveBeenCalledWith("Max video size allowed is 10 MB!");
  });

  it("Should call toast loading while uploading video", () => {
    const { getByLabelText } = render(
      <UploadVideoPage />
    );

    const input = getByLabelText(/Click here to upload files/i);
    const file = new File(['Content'], 'example.webm', { type: 'video/webm' });

    const files = [file];

    fireEvent.change(input, { target: { files } });

    expect(toast.loading).toHaveBeenCalledWith("Uploading video");
  });

  it("Should call toast success after uploading video", async () => {
    (api.uploadVideo as jest.Mock).mockResolvedValue({ text: async () => "Video Uploaded!" });

    const { getByLabelText } = render(
      <UploadVideoPage />
    );

    const input = getByLabelText(/Click here to upload files/i);
    const file = new File(['Content'], 'example.webm', { type: 'video/webm' });

    const files = [file];

    fireEvent.change(input, { target: { files } });

    await waitFor(() => {
      expect(toast.dismiss).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalledWith("Video Uploaded!", expect.anything());
    });
  });

  it("Should call toast error after failing to upload video", async () => {
    (api.uploadVideo as jest.Mock).mockRejectedValue("Something went wrong. Try again later!");

    const { getByLabelText } = render(
      <UploadVideoPage />
    );

    const input = getByLabelText(/Click here to upload files/i);
    const file = new File(['Content'], 'example.webm', { type: 'video/webm' });

    const files = [file];

    fireEvent.change(input, { target: { files } });

    await waitFor(() => {
      expect(toast.dismiss).toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith("Something went wrong. Try again later!", expect.anything());
    });
  });
});