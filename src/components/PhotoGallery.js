import React from "react";
import useFirestore from "../hooks/useFirestore";

const PhotoGallery = () => {
  const { docs } = useFirestore("flights");
  return (
    <div className="photo-gallery">
      {docs.map((photo) => {
        return <img src={photo.url} key={photo.id} />;
      })}
    </div>
  );
};

export default PhotoGallery;
