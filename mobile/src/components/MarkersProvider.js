import React, { createContext, useState, useContext } from 'react';

// Create the context
const MarkersContext = createContext();

// Create a provider component
export const MarkersProvider = ({ children }) => {
  const [startMarker, setStartMarker] = useState({ latitude: 0, longitude: 0 });
  const [endMarker, setEndMarker] = useState({ latitude: 0, longitude: 0 });

  return (
    <MarkersContext.Provider value={{ startMarker, setStartMarker, endMarker, setEndMarker }}>
      {children}
    </MarkersContext.Provider>
  );
};

export const useMarkers = () => {
  return useContext(MarkersContext);
};
