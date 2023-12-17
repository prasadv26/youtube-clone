import React, { useEffect, useState } from "react";
import { YT_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const getVideos = async () => {
    try {
      const response = await fetch(YT_VIDEO_API);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const videos = await response.json();
      setVideoList(videos.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap mx-1">
      {videoList.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
