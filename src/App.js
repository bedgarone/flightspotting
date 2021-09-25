import UploadForm from "./components/UploadForm";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <div className="container">
      <div className="title-logo">FlightSpotting</div>
      <UploadForm />
      <PhotoGallery />
    </div>
  );
}

export default App;
