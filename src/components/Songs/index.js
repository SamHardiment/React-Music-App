import React from "react";
import Button from "../LikeButton";

const Songs = ({ album }) => {
  console.log({ album });

  const renderLis = () =>
    album.songs.map((s) => (
      <li>
        {s}
        <Button />
      </li>
    ));

  return (
    <div>
      <ul>{renderLis()}</ul>
    </div>
  );
};

export default Songs;
