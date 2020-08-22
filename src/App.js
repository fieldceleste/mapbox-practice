import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import MapGL, {Marker, Popup} from "react-map-gl";
import Directions from 'react-map-gl-directions'
import collegeData from "./data/colleges_init.json";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-directions/dist/mapbox-gl-directions.css'


export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 39.8283,
    longitude: -98.5795,
    width: "100vw",
    height: "100vh",
    zoom: 3,
  
  });


  const mapRef = React.createRef(null);

  const [selectedCollege, setCollegeData] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setCollegeData(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

 

  return (
    <div>
      <MapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/college-trips/cke4mtjwb10ma19qqwrcjm7i7"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
     >
     {collegeData.map(college => (
      
          <Marker
            key={college.ipedsid}
            latitude={college["loc.lat"]}
            longitude={college["loc.lng"]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setCollegeData(college);
              }}
            >
              <img src="/college.svg" alt="College Icon" />
            </button>
          </Marker>
        ))}
       
        {selectedCollege ? (
          <Popup
            latitude={selectedCollege["loc.lat"]}
            longitude={selectedCollege["loc.lng"]}
            onClose={() => {
              setCollegeData(null);
            }}
          >
            <div>
              <h2>{selectedCollege.name}</h2>
              <p>{selectedCollege["loc.state.name"]}</p>
            </div>
          </Popup>
        ) : null}
        <Directions ref={mapRef}  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}/>
      </MapGL>
    </div>
  );
}



