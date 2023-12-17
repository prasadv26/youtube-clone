import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="w-[17rem] mx-2 p-1 cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <h2 className="font-semibold overflow-y-clip my-1">{title}</h2>
      <h2 className="font-light text-gray-600 hover:text-black">
        {channelTitle}
      </h2>
      <h2 className="font-light text-gray-500 hover:text-black">
        {statistics.viewCount} Views
      </h2>
    </div>
  );
};

export default VideoCard;
