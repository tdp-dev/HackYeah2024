import React from 'react';
import { Marker } from 'react-native-maps';

function MapWarningMarker({ coordinate }) {
  return (
    <Marker
      coordinate={coordinate}
      image={require('./../../assets/warning.png')}
    />
  );
};

export default MapWarningMarker;