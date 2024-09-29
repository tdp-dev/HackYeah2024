import React, { useState, useRef, useCallback } from 'react';
import MainView from './src/views/MainView';
import { MarkersProvider, useMarkers } from './src/components/MarkersProvider';

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
  return (
    <MarkersProvider>
      <MainView />
    </MarkersProvider>
  );
};

export default App;
