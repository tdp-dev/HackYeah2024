import React from 'react';
import { Polyline } from 'react-native-maps';

const MapRoute = ({ strokeWidth = 2, coordinates = [], strokeColor = "#f56a3e" }) => {
  console.log(coordinates)
  return (
    <Polyline
      coordinates={coordinates}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      lineCap="round"
      lineJoin="round"
    />
  );
};

export default MapRoute;