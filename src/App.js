import React from "react";
import "./style.css";
import Content from "./pages/content.js";
import MovieForm from "./pages/movieform.js";
import Fullscreen from "./core/fullscreenmode.js";

export default function App() {
  
  return (
    <div>
      <MovieForm />
      <Fullscreen />
      <Content />
    </div>
  );
}
