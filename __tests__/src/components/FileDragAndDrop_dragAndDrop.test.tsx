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

const renderAndReturnDropArea = () => {
  const { getByTestId } = render(
    <MockFileDragAndDrop />
  );

  return getByTestId("drop-area");
}

describe("File Drag and Drop area", () => {
  it("Should call handleFilesAdded when file dropped", () => {
    const dropArea = renderAndReturnDropArea();
    const file = new File(['content'], 'example.webm', { type: 'video/webm' });
    const files = [file];

    fireEvent.drop(dropArea, { dataTransfer: { files } });

    expect(handleFilesAdded).toHaveBeenCalled();

    // [0] -> first (and only) call [0] -> first (and only) argument of the call
    expect(handleFilesAdded.mock.calls[0][0]).toHaveLength(1);
    expect(handleFilesAdded.mock.calls[0][0]).toBe(files);
  });

  it("Should call toast error when adding image", () => {
    const dropArea = renderAndReturnDropArea();
    const file = new File(['content'], 'example.png', { type: 'image/png' });
    const files = [file];

    fireEvent.drop(dropArea, { dataTransfer: { files } });

    expect(toast.error).toHaveBeenCalledWith("Only .webm files are allowed!");
  });

  it("Should call toast error when adding more than one file", () => {
    const dropArea = renderAndReturnDropArea();
    const files = [
      new File(['content'], 'example.png', { type: 'image/png' }),
      new File(['content'], 'example.webm', { type: 'video/webm' }),
    ];

    fireEvent.drop(dropArea, { dataTransfer: { files } });

    expect(toast.error).toHaveBeenCalledWith("Only one video can be uploaded at a time!");
  });
});
