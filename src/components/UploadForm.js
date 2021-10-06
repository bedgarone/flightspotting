import React, { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import axios from "axios";

// date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { flights } from "../firebase/mockAPI";
import FlightLabel from "./FlightLabel";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [flight, setFlight] = useState({});
  const [targetAirport, setTargetAirport] = useState("");
  const [flightsList, setFlightsList] = useState([]);

  const [startDate, setStartDate] = useState(new Date());

  var axios = require("axios").default;

  let f_year = startDate.getFullYear();
  let f_month = startDate.getMonth() + 1;
  let f_day = startDate.getDate();

  let stringDate =
    f_year +
    "-" +
    f_month.toString().padStart(2, "0") +
    "-" +
    f_day.toString().padStart(2, "0") +
    "T12:00/" +
    f_year +
    "-" +
    f_month.toString().padStart(2, "0") +
    "-" +
    (f_day + 1).toString().padStart(2, "0") +
    "T00:00";

  var options = {
    method: "GET",
    url:
      "https://aerodatabox.p.rapidapi.com/flights/airports/icao/" +
      targetAirport +
      "/" +
      stringDate,
    params: {
      withLeg: "true",
      direction: "Both",
      withCancelled: "false",
      withCodeshared: "true",
      withCargo: "true",
      withPrivate: "true",
    },
    headers: {
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
      "x-rapidapi-key": "9bd1d418d3msh7af5683a07dd2f1p1d61bcjsn5490340a2f6b",
    },
  };

  const fileTypes = ["image/png", "image/jpeg"];

  const changeFile = (e) => {
    let uploaded = e.target.files[0];
    if (uploaded && fileTypes.includes(uploaded.type)) setFile(uploaded);
    else {
      setFile(null);
      console.log("Wrong type of file. Only jpeg or png");
    }
  };

  const handleairtest = () => {
    axios
      .request(options)
      .then(function (response) {
        setFlightsList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleAirport = (e) => {
    let airport = e.target.value;
    setTargetAirport(airport);
    //await or not?
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log("SETTING ARRIVALS");
    //     setArrivals(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
    setFlightsList(flights); // change to real API!
  };

  return (
    <>
      <h1>{targetAirport}</h1>
      <form>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
        <input type="file" onChange={changeFile} />
        {file && (
          <ProgressBar
            file={file}
            flight={flight}
            setFile={setFile}
            setFlight={setFlight}
          />
        )}
        <select onChange={handleAirport}>
          <option value="-">-</option>
          <option value="LPPR">LPPR - Porto</option>
        </select>
        <div className="btn btn-orange text-white" onClick={handleairtest}>
          Search Flights
        </div>
      </form>
      <div className="row gap-1">
        <div className="col-12-xs col-6-lg flight-list">
          <div>Arrivals</div>
          {flightsList.arrivals &&
            flightsList.arrivals.map((fl, key) => {
              return (
                <FlightLabel
                  type="arrival"
                  selectedFlight={flight}
                  flight={fl}
                  update={setFlight}
                  key={key}
                />
              );
            })}
        </div>
        <div className="col-12-xs col-6-lg flight-list">
          <div>Departures</div>
          {flightsList.departures &&
            flightsList.departures.map((fl, key) => {
              return (
                <FlightLabel
                  type="departure"
                  selectedFlight={flight}
                  flight={fl}
                  update={setFlight}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default UploadForm;
