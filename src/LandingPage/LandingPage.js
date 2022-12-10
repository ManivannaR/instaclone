import React from "react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/postviewpage");
  };

  return (
    <>
      <img
        src="/images/landingpageimage.jpg"
        alt="scenery"
        id="landing-image"
      />
      <div className="landing-right">
        <h3>Welcome to 10X</h3>
        <button type="submit" onClick={routeChange}>
          Enter
        </button>
      </div>
    </>
  );
}

export default Landingpage;
