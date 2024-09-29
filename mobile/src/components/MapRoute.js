import React, { useEffect, useState, useMemo } from 'react';
import { Polyline } from 'react-native-maps';
import MapWarningMarker from './MapWarningMarker';
import { fetchAlerts } from "../requests"

const MapRoute = ({ strokeWidth = 2, coordinates = [], strokeColor = "#000" }) => {
  const [alerts, setAlerts] = useState();

  useEffect(() => {
    const fetchAndSetAlerts = async () => {
      try {
        const fetchedAlerts = await fetchAlerts();
        setAlerts(fetchedAlerts);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAndSetAlerts(); // Call the function
  }, []);

  const markers = useMemo(() => {
    if (alerts) {
      return alerts.map(a => <MapWarningMarker key={a.id} coordinate={{latitude: a.lat, longitude: a.lon}} />)
    }
    return []
  }, [alerts]);

  return (
    <>
      <Polyline
        coordinates={coordinates}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        lineCap="round"
        lineJoin="round"
      />
      { markers }
    </>
  );
};

export default MapRoute;
