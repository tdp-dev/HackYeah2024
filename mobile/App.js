import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';

import MapView, { Polyline, Marker } from 'react-native-maps';
import MapRoute from './src/components/MapRoute';
import { useEffect } from "react";
import ContextMenu from './src/components/ContextMenu';
import RoutingOptions from './src/components/RoutingOptions';
import TopBar from './src/components/TopBar';

import {
  createAlert,
  fetchAlerts,
  fetchPointVerboseName,
  fetchRoute,
} from "./requests"
import MapWarningMarker from './src/components/MapWarningMarker';



  // callbacks
//const handleSheetChanges = useCallback((index: number) => {
  //console.log('handleSheetChanges', index);
//}, []);

// export type WayPoint = {
//   lat: number;
//   lon:  number;
// }

// export interface Params {
//   start: WayPoint,
//   target: WayPoint,
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});



function App() {
  useEffect(() => {
    const start = {"lat": 50.072159, "lon": 19.981695};
    const target = {"lat": 50.072159, "lon": 19.981695};

    //fetchPointVerboseName(start);
    //toggleSheet();
    const test = async () => { 
      //console.log({alerts: await fetchAlerts()})
      const data = {
        "Name": "another test",
        "Type": "Danger road",
        "lat": 123,
        "lon": 123
      };
      //await createAlert(data);
      //console.log({route: await fetchRoute({start, target})});
      //console.log({point: await fetchPointVerboseName(start)});
    };
    test()
  }, []);



  // State to manage the region
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
      <TopBar />
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} 
      >
        <MapRoute strokeWidth={strokeWidth} coordinates={coordinates}></MapRoute>
        <MapWarningMarker coordinate={{latitude: 50.058411021726435, longitude: 19.93}} />
      </MapView>
      <ContextMenu />
      <RoutingOptions />
    </View>
  );
};

export default App;
