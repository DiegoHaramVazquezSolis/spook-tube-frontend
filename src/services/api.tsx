const uploadVideo = async (video: File) => {
  const body = new FormData();
  body.append("video", video);

  const response = await fetch("https://fake-api/upload/video", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body,
  });

  return response;
}

export {
  uploadVideo
};