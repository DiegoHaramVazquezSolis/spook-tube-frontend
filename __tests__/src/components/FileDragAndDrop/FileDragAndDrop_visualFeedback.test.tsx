import { render, fireEvent } from "@testing-library/react";

import { FileDragAndDrop } from "@/components/FileDragAndDrop";

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

describe("File Drag and Drop visual feedback", () => {
  it("Should provide visual feedback when dragging", () => {
    const { getByTestId } = render(
      <MockFileDragAndDrop />
    );

    const dropArea = getByTestId("drop-area");

    fireEvent.dragEnter(dropArea, { type: "dragenter" });

    expect(dropArea).toHaveClass("opacity-50");
  });

  it("Should go back to original state when drag leaves overlay", () => {
    const { getByTestId } = render(
      <MockFileDragAndDrop />
    );

    const dropArea = getByTestId("drop-area");

    fireEvent.dragEnter(dropArea, { type: "dragenter" });

    // Expect visual feedback to appear
    expect(dropArea).toHaveClass("opacity-50");

    const dropOverlay = getByTestId("drop-overlay");

    fireEvent.dragLeave(dropOverlay, { type: "dragenter" });

    // Expect visual feedback to be removed
    expect(dropArea).not.toHaveClass("opacity-50");
  });
});
