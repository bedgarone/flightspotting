import "./App.css";

import UploadForm from "./components/UploadForm";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <div className="App">
      <h1>FlightSpotting</h1>
      <UploadForm />
      <PhotoGallery />
    </div>
  );
}

export default App;
