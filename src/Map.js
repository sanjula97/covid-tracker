import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";

function Map({ center, zoom, countries }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LeafletMap>
    </div>
  );
}

export default Map;
