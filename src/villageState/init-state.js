import { START_PLACE } from "../map/map.js";
import { randomPick } from "../shared/random.js";
import { VillageState } from "./village-state.js";

export function initStates(parcelCount = 5) {
  const parcels = [];
  for (let count = 0; count < parcelCount; count++) {
    const from = randomPick();

    // make sure the from and to are different
    let to;
    do {
      to = randomPick();
    } while (from === to);

    parcels.push({ from, to });
  }

  return new VillageState(START_PLACE, parcels);
}
