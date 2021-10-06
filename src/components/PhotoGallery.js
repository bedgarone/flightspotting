import React from "react";
import useFirestore from "../hooks/useFirestore";

const PhotoGallery = () => {
  const { docs } = useFirestore("flights");
  return (
    <div className="photo-gallery">
      {docs.map((photo) => {
        return (
          <div className="flight-card" key={photo.id}>
            <div className="flight-label badge-orange text-white">
              {photo.flight.number}
            </div>
            <img src={photo.url} />
            <div className="aircraft-name text-white">
              <div>{photo.flight.aircraft.model}</div>
              <div className="badge-white text-gray">
                {photo.flight.aircraft.reg}
              </div>
            </div>
            <div className="flight-info">
              {photo.flight.arrival.airport
                ? "From " + photo.flight.arrival.airport.name
                : "To " + photo.flight.departure.airport.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
