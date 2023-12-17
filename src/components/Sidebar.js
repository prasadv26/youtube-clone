import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return;
  return (
    <div className="shadow-r-lg w-56 shadow-lg px-4 mr-1">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h2 className="font-bold pt-3">Subscriptions</h2>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Politics</li>
        <li>News</li>
        <li>Fashion</li>
      </ul>
      <h2 className="font-bold pt-3">Explore</h2>
      <ul>
        <li>Live</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Films</li>
      </ul>
    </div>
  );
};

export default Sidebar;
