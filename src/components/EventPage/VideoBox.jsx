import React, { useEffect, useRef } from "react";

const VideoBox = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [url]);
  return (
    <div className="vidHolder">
        <img
          src={`${url}`}
          className="animImg"
        />
    </div>
  );
};

export default VideoBox;