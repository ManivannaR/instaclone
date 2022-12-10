import React from "react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/postviewpage");
  };

  return (
    <>
      <div
        className="landing-div"
        style={{
          backgroundImage: "url(/images/new/landscape1.jfif)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "460px",
        }}
      >
        <h1 id="landing-title">Welcome to Instaclone</h1>
        <button
          type="submit"
          onClick={routeChange}
          id="landing-enter-btn"
          title="Click to Enter"
        >
          Enter
        </button>
      </div>
    </>
  );
}

export default Landingpage;
