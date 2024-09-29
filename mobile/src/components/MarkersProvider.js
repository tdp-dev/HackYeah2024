import React, { createContext, useState, useContext } from 'react';

const MarkersContext = createContext();

export const MarkersProvider = ({ children }) => {
  const [startMarker, setStartMarker] = useState({latitude: 50.03411021726435, longitude: 19.939532831423723});
  const [endMarker, setEndMarker] = useState({latitude: 50.061689609947265, longitude: 19.93896261951241});
  const [route, setRoute] = useState([]);

  return (
    <MarkersContext.Provider value={{ startMarker, setStartMarker, endMarker, setEndMarker, route, setRoute }}>
      {children}
    </MarkersContext.Provider>
  );
};

export const useMarkers = () => {
  return useContext(MarkersContext);
};
