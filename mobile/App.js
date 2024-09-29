import React, { useState, useRef, useCallback } from 'react';

import { useEffect } from "react";
import ContextMenu from './src/components/ContextMenu';
import TopBar from './src/components/TopBar';
import { MarkersProvider } from './src/components/MarkersProvider';
import MapWarningMarker from './src/components/MapWarningMarker';
import MainView from "./src/views/MainView"

  // callbacks
//const handleSheetChanges = useCallback((index: number) => {
  //console.log('handleSheetChanges', index);
//}, []);

// export type WayPoint = {
//   lat: number;
//   lon:  number;
// }r

// export interface Params {
//   start: WayPoint,
//   target: WayPoint,
// }

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

  return (
    <MarkersProvider>
      <MainView />
    </MarkersProvider>
  );
};

export default App;
