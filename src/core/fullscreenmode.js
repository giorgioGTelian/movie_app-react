import React, { useState } from "react";

function FullscreenButton() {
  const [fullscreen, setFullscreen] = useState(false);

  function toggleFullscreen() {
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }

  return (
    <button className="btn" id="fullscr" onClick={toggleFullscreen}>
      {fullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
    </button>
  );
}

export default FullscreenButton;
