import { map } from "../map/map.js";

let routes = [];
export function goGoal(state) {
  let next;
  const { place, parcels } = state;
  if (routes.length === 0) {
    findParcelRoute(place, parcels[0]);
  }
  next = routes[0];
  routes = routes.slice(1);
  return next;
}

function findParcelRoute(place, parcel) {
  if (place === parcel.from) {
    // find a route to deliver the parcel
    routes = findRoute(place, parcel.to);
  } else {
    // find a route to get the parcel
    routes = findRoute(place, parcel.from);
  }
}

function findRoute(from, to) {
  let work = [{ at: from, routes: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, routes } = work[i];
    for (let place of map[at]) {
      if (place === to) {
        routes.push(place);
        return routes;
      }
      if (!work.some((w) => w.at == place)) {
        work.push({ at: place, routes: routes.concat(place) });
      }
    }
  }
}
