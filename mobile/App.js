import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect } from "react";
import axios from "axios";
import PocketBase from 'pocketbase'

import {
  createAlert,
  fetchAlerts,
  fetchPointVerboseName,
  fetchRoute,
} from "./requests"

export type WayPoint = {
  lat: number;
  lon:  number;
}

export interface Params {
  start: WayPoint,
  target: WayPoint,
}


function App() {

  useEffect(() => {
    const start = {"lat": 50.072159, "lon": 19.981695};
    const target = {"lat": 50.072159, "lon": 19.981695};

    fetchPointVerboseName(start);
    const test = async () => { 
      //console.log({alerts: await fetchAlerts()})
      const data = {
        "Name": "another test",
        "Type": "Danger road",
        "lat": 123,
        "lon": 123
      };
      await createAlert(data);
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

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} 
      />
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
