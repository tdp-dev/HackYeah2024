import React from 'react';
import { Polyline } from 'react-native-maps';

const MapRoute = ({ strokeWidth = 2, coordinates = [], strokeColor = "#000" }) => {
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