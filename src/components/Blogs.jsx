// Blogs.js
import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import AnimationData from "../lottie/Animation.json";
import "./style.css";

const Blogs = () => {
  return (
    <Player
    autoplay
    loop
    src={AnimationData}
    style={{ height: '500px', width: '500px' }}
  >
  </Player>

    
  );
};

export default Blogs;
