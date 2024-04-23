"use client"
import React from "react";
import { toast } from "sonner";

import { uploadVideo } from "@/services/api";

import { FileDragAndDrop } from "@/components/FileDragAndDrop";

const UploadVideoPage = () => {
  const handleAddedFile = async (files: FileList) => {
    const video = Array.from(files)[0];

    if (video) {
      // 10 Megabytes in Bytes
      const maxFileSize = 10485760;
      if (video.size > maxFileSize) {
        return toast.error("Max video size allowed is 10 MB!");
      }

      const loadingToast = toast.loading("Uploading video");

      try {
        const result = await uploadVideo(video);

        toast.dismiss(loadingToast);

        toast.success(await result.text(), {
          duration: 1250
        });
      } catch (error) {
        toast.dismiss(loadingToast);

        toast.error(error as string, {
          duration: 1250
        });
      }
    }
  }

  return (
    <main className="grow flex flex-col items-center justify-center gap-16">
      <h1 className="text-3xl text-slate-950 uppercase">
        Upload Video
      </h1>
      <FileDragAndDrop
        multiple={false}
        noMultipleErrorMessage="Only one video can be uploaded at a time!"
        onFilesAdded={handleAddedFile}
        formats={["webm"]}
        invalidFormatMessage="Only .webm files are allowed!">
        <div className="flex flex-col items-center justify-center text-2xl bg-[rgb(206,208,210)] rounded-3xl p-10 gap-6 cursor-pointer">
          <div className="w-24 h-24 bg-black flex items-center justify-center rounded-full">
            <div className="w-9 h-9 bg-[rgb(206,208,210)] rounded-full"></div>
          </div>
          <h3 className="text-2xl uppercase text-slate-950">
            Insert Disc
          </h3>
        </div>
      </FileDragAndDrop>
    </main>
  );
};

export default UploadVideoPage;