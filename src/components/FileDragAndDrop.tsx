import React, { ChangeEvent, DragEvent, ReactNode, useCallback, useState } from 'react';
import { toast } from 'sonner';

type ValidFormats = 'jpg' | 'png' | 'mp4' | 'webm';

interface BaseProps {
  onFilesAdded: (files: FileList) => void;
  children: ReactNode;
  formats?: ValidFormats[];
  multiple?: boolean;
  invalidFormatMessage?: string;
}

interface PropsWithFalseMultiple extends BaseProps {
  multiple: false;
  noMultipleErrorMessage: ReactNode;
}

interface PropsWithTrueOrUndefinedMultiple extends BaseProps {
  multiple?: true;
}

type FileDragAndDropProps = PropsWithTrueOrUndefinedMultiple | PropsWithFalseMultiple

const FileDragAndDrop = ({ onFilesAdded, children, formats = ['webm', 'mp4'], multiple = false, invalidFormatMessage, ...rest }: FileDragAndDropProps) => {
  const [dragActive, setDragActive] = useState(false);

  const validateFormat = useCallback((files: FileList) => {
    return Array.from(files).some((file) =>
      !formats.some((format) =>
        file.name.toLowerCase().endsWith(format.toLowerCase())
      )
    );
  }, [formats]);

  const handleFiles = useCallback((files: FileList | null) => {
    setDragActive(false);

    if (files) {
      if (!multiple && files.length > 1) {
        const { noMultipleErrorMessage } = rest as PropsWithFalseMultiple;
        return toast.error(noMultipleErrorMessage);
      }

      if (validateFormat(files)) {
        toast.error(invalidFormatMessage || 'Invalid format');
        return;
      }

      if (files && files.length) {
        onFilesAdded(files);
      }
    }
  }, [invalidFormatMessage, multiple, onFilesAdded, rest, validateFormat]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      handleFiles(e.dataTransfer.files);
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragEnter={handleDrag}
      className={`relative ${dragActive ? "opacity-50" : ""}`}>
      <label htmlFor="uploadFile">
        {children}
        <input
          type="file"
          className="hidden"
          id="uploadFile"
          onChange={handleFileChange}
          multiple={multiple} />
      </label>
      {dragActive &&
        <div
          className="absolute w-full h-full top-0 left-0"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop} />
      }
    </div>
  );
};

export {
  FileDragAndDrop
};