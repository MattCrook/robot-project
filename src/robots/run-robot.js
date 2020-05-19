import { print } from "../view/print.js";

export function runRobot(go, state) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      print(`Done in ${turn} turns`);
      return;
    }

    printParcels(state.parcels);
    const next = go(state);
    state = state.move(next);
    print(`Moved to ${next}`);
  }
}

function printParcels(parcels) {
  let message = `${parcels.length} Parcels <br> `;
  for (let index = 0; index < parcels.length; index++) {
    const parcel = parcels[index];
    message += `Parce ${index}: ${parcel.from} --> ${parcel.to} <br>`;
  }
  print(message);
}
