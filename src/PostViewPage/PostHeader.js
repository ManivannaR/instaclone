import React from "react";
import { useNavigate } from "react-router-dom";

function PostHeader() {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/addpost");
  };

  return (
    <>
      <div className="logo-holder">
        <img id="icon-logo" src="/images/instaclone-logo.png" alt="logo-icon" />
      </div>
      <div className="heading-holder">
        <h1 id="instaclone-heading">INSTACLONE</h1>
      </div>
      <div className="camera-icon-holder">
        <img
          id="icon-camera"
          src="/images/icon-camera.png"
          alt="options-icon"
          height="60px"
          width="50px"
          onClick={routeChange}
        />
      </div>
    </>
  );
}

export default PostHeader;
