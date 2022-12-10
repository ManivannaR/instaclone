import React from "react";
import { useNavigate } from "react-router-dom";

function PostHeader() {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/addpost");
  };

  return (
    <>
      <img
        id="icon-logo"
        src="/images/instaclone-logo.png"
        alt="logo-icon"
        height="70px"
        width="100px"
      />
      <h1 className="instaclone-heading">INSTACLONE</h1>
      <img
        id="icon-camera"
        src="/images/icon-camera.png"
        alt="options-icon"
        height="60px"
        width="50px"
        onClick={routeChange}
      />
    </>
  );
}

export default PostHeader;
