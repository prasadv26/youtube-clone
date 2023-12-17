import React, { useEffect } from "react";
import { hideSidebar } from "../utils/redux/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const hideMenu = () => {
    dispatch(hideSidebar());
  };
  useEffect(() => {
    hideMenu();
  }, []);

  const [searchPram] = useSearchParams();
  console.log(searchPram.get("v"));
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchPram.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
