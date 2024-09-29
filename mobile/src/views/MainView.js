import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView, Image } from 'react-native';

import MapView, { Polyline, Marker } from 'react-native-maps';
import MapRoute from '../components/MapRoute';
import { useEffect } from "react";
import ContextMenu from '../components/ContextMenu';
import RoutingOptions from '../components/RoutingOptions';
import TopBar from '../components/TopBar';
import { MarkersProvider, useMarkers } from '../components/MarkersProvider';
import DefaultLayout from '../components/DefaultLayout';

import {
  createAlert,
  fetchAlerts,
} from "../requests"


import MapWarningMarker from '../components/MapWarningMarker';



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

function MainView() {
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


  const [region, setRegion] = useState({
    latitude: 50.071, 
    latitudeDelta: 0.736, 
    longitude: 19.924,
    longitudeDelta: 0.583
  });
  
  const { route, setRoute } = useMarkers();

  const [markerPos, setMarkerPos] = useState(null);
  const [alerts, setAlerts] = useState();

  const handleLongPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPos({ lat: latitude, lon: longitude });
  };

  function addNewAlert(alert) {
    setAlerts(prev => [...prev, alert]);
    setMarkerPos(null);
  }

  const coordinates = route.map(coord => ({
    latitude: coord[0]/10,
    longitude: coord[1]/10
  }))

  useEffect(() => {
    const fetchAndSetAlerts = async () => {
      try {
        const fetchedAlerts = await fetchAlerts();
        console.log({ fetchedAlerts });
        setAlerts(fetchedAlerts);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAndSetAlerts(); // Call the function
  }, []);
  
  // [{latitude: 10, longitude:10}, {latitude: 50, longitude:50},{"latitude": 50.034119, "longitude": 19.9395}, {"latitude": 50.0679999999999, "longitude": 19.939598}]
  // console.log(coordinates)
  

  

  const minimalStrokeWidth = 2
  const strokeWidth = 0.03 / region.latitudeDelta > minimalStrokeWidth ? 0.03 / region.latitudeDelta : minimalStrokeWidth

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)} 
        >
        { !markerPos && <DefaultLayout />}
        { markerPos && <CreateAlert coordinates={markerPos} addNewAlert={addNewAlert} /> }
        <MapRoute strokeWidth={strokeWidth} coordinates={coordinates} alerts={alerts}></MapRoute>
        <MapWarningMarker coordinate={{latitude: 50.058411021726435, longitude: 19.93}} />
        <RoutingOptions />
      </MapView>
    </View>
  )
}

export default MainView;
