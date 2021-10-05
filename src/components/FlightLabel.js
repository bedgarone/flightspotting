import React from "react";

const FlightLabel = ({ type, selectedFlight, flight, update }) => {
  let selected = JSON.stringify(selectedFlight) === JSON.stringify(flight);

  return (
    <div
      className={
        "flight-btn " +
        (selected ? "btn-blue outline-blue" : "btn-gray outline-gray") +
        " text-white"
      }
      onClick={() => update(flight)}
    >
      <div className="flex-row">
        <div className="fl-time">
          {type == "arrival"
            ? flight.arrival.scheduledTimeLocal.substring(11, 16)
            : flight.departure.scheduledTimeLocal.substring(11, 16)}
        </div>
        <div className="btn-orange font-small">{flight.number}</div>
        <div className="airline">{flight.airline.name}</div>
        <div className="foreign-city font-small">
          (
          {type == "arrival"
            ? flight.departure.airport.name
            : flight.arrival.airport.name}
          )
        </div>
        <div className="fl-aircraft font-small">
          {flight.aircraft && flight.aircraft.model}
        </div>
      </div>
    </div>
  );
};

export default FlightLabel;
