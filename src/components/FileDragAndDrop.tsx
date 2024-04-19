import React, { ChangeEvent, DragEvent, ReactNode, useCallback } from 'react';

type ValidFormats = 'jpg' | 'png' | 'mp4' | 'webm';

interface FileDragAndDropProps {
  onUpload: (files: FileList) => void;
  children: ReactNode;
  formats?: ValidFormats[];
}

const FileDragAndDrop = ({ onUpload, children, formats = ['webm', 'mp4'] }: FileDragAndDropProps) => {
  const validateFormat = useCallback((files: FileList) => {
    return Array.from(files).some((file) =>
      !formats.some((format) =>
        file.name.toLowerCase().endsWith(format.toLowerCase())
      )
    );
  }, [formats]);

  const handleFiles = useCallback((files: FileList | null) => {
    if (files) {
      if (validateFormat(files)) {
        console.log('Invalid format');
        return;
      }

      if (files && files.length) {
        onUpload(files);
      }
    }
  }, [onUpload, validateFormat]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      handleFiles(e.dataTransfer.files);
    }
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}>
      <label htmlFor="uploadFile">
        {children}
        <input type="file" className="hidden" id="uploadFile" onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default FileDragAndDrop;