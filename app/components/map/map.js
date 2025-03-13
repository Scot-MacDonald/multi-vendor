"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";

// const MapComponent = () => {
//     return (
//       <MapContainer 
//         center={[52.52, 13.405]} // Berlin coordinates (latitude, longitude)
//         zoom={13} 
//         style={{ height: "400px", width: "100%" }} // Define map size
//       >
//         {/* OpenStreetMap Tile Layer */}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//       </MapContainer>
//     );
//   };
  
//   export default MapComponent;




// Define marker position (Berlin)
const position = [52.52, 13.405];

// Define the custom icon for the marker
const customIcon = new L.Icon({
    iconUrl: "/path-to-your-image.png", // Path to your custom image
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point for the icon
    popupAnchor: [0, -32], // Popup anchor point
  });

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Add Marker */}
      <Marker position={position}>
        <Popup>hey scot i work! but i need a image :(</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

  