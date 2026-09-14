import React, { createContext, useContext } from 'react';
import { DEFAULT_WORLD } from '../object/worlds';

// Holds the current world: { id, basePath, works }. basePath (e.g. "/uds-crag")
// is prefixed onto every in-app link so navigation always stays inside the
// current world.
const WorldContext = createContext(null);

export const WorldProvider = ({ world, children }) => (
  <WorldContext.Provider value={world}>{children}</WorldContext.Provider>
);

export const useWorld = () => {
  const world = useContext(WorldContext);
  // Defensive default (main world) in case a component renders outside a
  // WorldProvider. Under normal routing every page is inside one.
  if (!world) {
    return { id: DEFAULT_WORLD, basePath: `/${DEFAULT_WORLD}`, works: null };
  }
  return world;
};

export default WorldContext;
