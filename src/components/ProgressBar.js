import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, flight, setFile, setFlight }) => {
  const { progress, url } = useStorage(file, flight);

  useEffect(() => {
    if (url) {
      setFile(null);
      setFlight(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
