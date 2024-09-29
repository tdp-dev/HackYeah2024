import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Marker } from 'react-native-maps';

const MapMarker = ({ coordinate }) => {

  return (
      <Marker
        coordinate={coordinate}
        anchor={{ x: 0.5, y: 0.5 }} // Center the marker
      >
        <View style={styles.marker} />
      </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 20, // Set width of the marker
    height: 20, // Set height of the marker
    borderRadius: 10, // Make it circular
    backgroundColor: 'orange', // Set the color to orange
    borderWidth: 2, // Optional: add border
    borderColor: 'darkorange', // Optional: border color
  },
});

export default MapMarker;
