import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { WorldProvider } from '../context/WorldContext';
import { getWorld, DEFAULT_WORLD } from '../object/worlds';

// Wraps every page under /:world. Validates the world segment, provides the
// world context, and renders the matched child page via <Outlet />.
const WorldLayout = () => {
  const { world: worldId } = useParams();
  const config = getWorld(worldId);

  if (!config) {
    return <Navigate to={`/${DEFAULT_WORLD}/workhome`} replace />;
  }

  const world = { id: worldId, basePath: `/${worldId}`, works: config.works };

  return (
    <WorldProvider world={world}>
      <Outlet />
    </WorldProvider>
  );
};

export default WorldLayout;
