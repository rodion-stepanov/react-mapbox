// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import REACT_APP_MAPBOX_ACCESS_TOKEN from '../env.local';  
import Preview from './components/Preview';
import Map from './components/Map';
import Sidebar from './components/Sidebar';
import * as places from './places/points.json';

function App() {
  const [viewport, setViewport] = React.useState({
    latitude: 54.707390,
    longitude: 20.507307,
    zoom: 11.5
  });
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(true);
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const points = places.default.features;

  function closePreview() {
    setIsPreviewOpen(false);
  }

  function selectPlace(point) {
    setSelectedPlace(point);
  }

  function closePopup() {
    setSelectedPlace(null)
  }


  return (
    <div className="app">
      <Preview onClose={closePreview} isPreviewOpen={isPreviewOpen} />
      <Sidebar onSelectPlace={selectPlace} points={points} selectedPlace={selectedPlace} />
      <Map
        viewport={viewport} setViewport={setViewport}
        points={points} onSelectPlace={selectPlace}
        selectedPlace={selectedPlace} closePopup={closePopup} />
    </div>
  );
}

export default App;
