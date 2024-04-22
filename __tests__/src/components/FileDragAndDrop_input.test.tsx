import { render, fireEvent } from "@testing-library/react";
import { toast } from "sonner";

import { FileDragAndDrop } from "@/components/FileDragAndDrop";

jest.mock('sonner', () => ({
  toast: {
    error: jest.fn(),
  },
}));

const handleFilesAdded = jest.fn();

const MockFileDragAndDrop = () => (
  <FileDragAndDrop
    multiple={false}
    noMultipleErrorMessage="Only one video can be uploaded at a time!"
    onFilesAdded={handleFilesAdded}
    formats={["webm"]}
    invalidFormatMessage="Only .webm files are allowed!"
    >
    <h1>Put your files here</h1>
  </FileDragAndDrop>
);

const renderAndReturnInput = () => {
  const { getByLabelText } = render(
    <MockFileDragAndDrop />
  );

  return getByLabelText(/Click here to upload files/i);
}

describe("File Drag and Drop file input", () => {
  it("Should call handleFilesAdded when file uploaded", () => {
    const input = renderAndReturnInput();
    const file = new File(['content'], 'example.webm', { type: 'video/webm' });
    const files = [file];

    fireEvent.change(input, { target: { files } });

    expect(handleFilesAdded).toHaveBeenCalled();

    // [0] -> first (and only) call [0] -> first (and only) argument of the call
    expect(handleFilesAdded.mock.calls[0][0]).toHaveLength(1);
    expect(handleFilesAdded.mock.calls[0][0]).toBe(files);
  });

  it("Should call toast error when adding image", () => {
    const input = renderAndReturnInput();
    const file = new File(['content'], 'example.png', { type: 'image/png' });
    const files = [file];

    fireEvent.change(input, { target: { files } });

    expect(toast.error).toHaveBeenCalledWith("Only .webm files are allowed!");
  });

  it("Should call toast error when adding more than one file", () => {
    const input = renderAndReturnInput();
    const files = [
      new File(['content'], 'example.png', { type: 'image/png' }),
      new File(['content'], 'example.webm', { type: 'video/webm' }),
    ];

    fireEvent.change(input, { target: { files } });

    expect(toast.error).toHaveBeenCalledWith("Only one video can be uploaded at a time!");
  });
});
