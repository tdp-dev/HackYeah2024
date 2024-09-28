import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import MapRoute from './src/components/MapRoute';

function App() {
  const [region, setRegion] = useState({
    latitude: 50.071, 
    latitudeDelta: 0.736, 
    longitude: 19.924,
    longitudeDelta: 0.583
  });

  const coordinates = [
    {latitude: 50.058411021726435, longitude: 19.939532831423723},
    {latitude: 50.061689609947265, longitude: 19.93896261951241},
    {latitude: 37.7665248, longitude: -122.4161628},
    {latitude: 37.7734153, longitude: -122.4577787},
    {latitude: 37.7948605, longitude: -122.4596065},
    {latitude: 37.8025259, longitude: -122.4351431}
  ]

  const minimalStrokeWidth = 2
  const strokeWidth = 0.03 / region.latitudeDelta > minimalStrokeWidth ? 0.03 / region.latitudeDelta : minimalStrokeWidth

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} 
      >
        <MapRoute strokeWidth={strokeWidth} coordinates={coordinates}></MapRoute>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default App;
