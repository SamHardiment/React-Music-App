import React from "react";

const Albums = ({ albums, handleAlbumSelect }) => {
  return (
    <div className="albumContainer">
      {albums.map((alb) => (
        <div
          className="albumCard"
          key={alb.id}
          onClick={() => handleAlbumSelect(alb.id)}
        >
          <strong role="heading" aria-label="Album Name">
            {alb.name}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default Albums;
