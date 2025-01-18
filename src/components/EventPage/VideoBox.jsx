import React, { useEffect, useRef } from "react";

const VideoBox = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);
  return (
    <div className="video_main">
      <img
        src={`${url}`}
        className="w-full h-full object-cover"
        width="100%"
      />
    </div>
  );
};

export default VideoBox;