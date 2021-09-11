import React, { useState } from "react";

import ProgressBar from "../components/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const fileTypes = ["image/png", "image/jpeg"];

  const changeFile = (e) => {
    let uploaded = e.target.files[0];
    if (uploaded && fileTypes.includes(uploaded.type)) setFile(uploaded);
    else {
      setFile(null);
      console.log("Wrong type of file. Only jpeg or png");
    }
  };

  return (
    <form>
      <input type="file" onChange={changeFile} />
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
