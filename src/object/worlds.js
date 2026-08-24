// "Worlds" are isolated variants of the site that share the same page
// components but live under their own URL folder (e.g. /uds-crag/workhome).
// Each world only differs in which projects it shows. Add a new world by
// adding one entry here — no new pages or routes required.
//
//   works: null        -> show every project in WorksData.js
//   works: [7, 8, 1, 2] -> show only those project ids, in that order
export const DEFAULT_WORLD = 'sds-inh';

export const worlds = {
  'sds-inh': { works: null },
  'uds-crag': { works: [7, 8, 1, 2] },
};

export const getWorld = (id) => worlds[id];
