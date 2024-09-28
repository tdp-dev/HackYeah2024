import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import polyline from '@mapbox/polyline';
import { useEffect } from "react";
import axios from "axios";
import PocketBase from 'pocketbase'

export type WayPoint = {
  lat: number;
  lon:  number;
}

export interface Params {
  start: WayPoint,
  target: WayPoint,
}


function App() {

  const valhalla = axios.create({
    baseURL: 'http://srv20.mikr.us:40276/',
    timeout: 1000,
  });
  const pb = new PocketBase("http://srv20.mikr.us:30164/")

  useEffect(() => {
    const start = {"lat": 50.072159, "lon": 19.981695};
    const target = {"lat": 50.072159, "lon": 19.981695};

    const createAlert = async () => {
      const data = {
        "Name": "test",
        "Type": "Danger road",
        "lat": 123,
        "lon": 123
      };
      const record = await pb.collection('alerts').create(data);
      return record
    }

    const fetchAlerts = async () => {
      const records = await pb.collection('alerts').getFullList({
          sort: '-created',
      });
      return records; 
    }

    const fetchPointVerboseName = async (point: WayPoint) => {
        const response = await valhalla.post("/locate", {
          "locations": [ point ],
          "verbose": true
        });

        return response.data[0].edges[0].edge_info.names[0];
    }

    const fetchRoute = async ({start, target}) => {
      try {
        const response = await valhalla.post("/route", {
          "locations": [start, target],
          "shape_format": "geojson",
          "exclude_locations": [
            { "lat": 50.067395, "lon": 19.982695 }
          ],
          "costing": "auto",
          "costing_options": {
            "auto": { "country_crossing_penalty": 2000.0 }
          },
          "units": "miles",
          "id": "my_work_route"
        });

        const data = response.data;
        const shape = data.trip.legs[0].shape;
        const waypoints = polyline.decode(shape);
        return waypoints;
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    //fetchRoute();
    //fetchPointVerboseName(start);
    //createAlert();
    fetchAlerts();
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
