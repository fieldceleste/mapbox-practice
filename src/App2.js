// import React from 'react';
// import './App.css';
// import mapboxgl from 'mapbox-gl';
// import ReactMapGL, {Layer, Feature} from "react-map-gl";
// import collegeData from "./data/colleges_init.json";
// import 'mapbox-gl/dist/mapbox-gl.css';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
// import 'react-map-gl-directions/dist/mapbox-gl-directions.css'
// // import collegeData from "./data/colleges_init.json";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// class App extends React.Component {

//   componentDidMount() {
//     // Creates new map instance
//     const map = new mapboxgl.Map({
//       container: this.mapWrapper,
//       style: 'mapbox://styles/college-trips/cke4mtjwb10ma19qqwrcjm7i7',
//       center: [-98.5795, 39.8283],
//       zoom: 3
//     });

//     // Creates new directions control instance
//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//       unit: 'metric',
//       profile: 'mapbox/driving',
//     });

//     // Integrates directions control with map
//     map.addControl(directions, 'top-left');
//   }

  
  



//   render() {
//     return (
//       // Populates map by referencing map's container property
//       <React.Fragment>
//       <div ref={el => (this.mapWrapper = el)} className="mapWrapper" />
//       <Layer
//           type="symbol"
//           layout={{ "icon-image": "harbor-15" }}>
//           <Feature
//             coordinates={markerCoord}
//             onHover={this._onHover}
//             onEndHover={this._onEndHover}
//             onClick={this._onClickMarker}/>
//       </Layer>
//       </React.Fragment>
//     );
//   }
// }

// export default App;