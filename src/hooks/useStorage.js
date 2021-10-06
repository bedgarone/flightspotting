import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file, flight) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    // firebase database references
    const storageRef = projectStorage.ref();
    const flightRef = storageRef.child("flights/" + file.name);
    const collectionRef = projectFirestore.collection("flights");
    flightRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await flightRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt, flight });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
