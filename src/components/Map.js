import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import starImage from "../images/star.png";

function Map({ viewport, setViewport, points, onSelectPlace, selectedPlace, closePopup }) {

    const mapStyle = 'mapbox://styles/mapbox/dark-v10';

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={mapStyle}
            width="70%"
            height="100vh"
            onViewportChange={(viewport) => setViewport(viewport)}
        >
            {points.map((point, i) =>
                <Marker
                    key={i}
                    longitude={point.geometry.coordinates[0]}
                    latitude={point.geometry.coordinates[1]}
                >
                    <button
                        onClick={() => onSelectPlace(point)}
                        className='map__button' />
                </Marker>
            )}
            { selectedPlace &&
                <Popup
                    className='popup'
                    longitude={selectedPlace.geometry.coordinates[0]}
                    latitude={selectedPlace.geometry.coordinates[1]}
                    onClose={closePopup}>
                    <div className='popup__wrapper'>
                        <h2 className='popup__title' >{selectedPlace.properties.name}</h2>
                        <p className='popup__rating' >{selectedPlace.properties.rating}</p>
                        <img className="popup__rating-image" src={starImage} alt="star" />
                    </div>
                </Popup>}
        </ReactMapGL >
    );
}
export default Map;