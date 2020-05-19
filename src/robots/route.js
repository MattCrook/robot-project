const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

// copy the mail route
let routes = mailRoute;

export function goRoute(state) {
  const place = routes[0];
  routes = routes.slice(1);

  // restart if not finish in one loop
  if (routes.length === 0) {
    routes = mailRoute;
  }
  return place;
}
