import React, { useState } from "react";

import "./index.css";

const Button = () => {
  const [likedState, setLikedState] = useState("btn-inactive btn");

  const toggleLike = () => {
    if (likedState === "btn-inactive btn") {
      setLikedState("btn-active btn");
    } else {
      setLikedState("btn-inactive btn");
    }
  };
  return (
    <button role="like" className={likedState} onClick={() => toggleLike()}>
      Like
    </button>
  );
};

export default Button;
