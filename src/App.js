import React from "react";
import { Status } from "@googlemaps/react-wrapper";
import './App.css';
import { useRef, useState, useEffect } from "react";
import {Login} from "./Login.js"




const mapId = `2a578504d16ac056`;

function App() {
  const ref = useRef();
  const [map, setMap] = useState();
  const [zoom, setZoom] = useState(3); // initial zoom
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  
  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  

  return (
    // <div    center={center}
    // // onClick={onClick}
    // // onIdle={onIdle}
    // zoom={zoom} style={{flexGrow: 1, height: '100%'}} ref={ref} />
    <Login/>
  );
}



export default App;
