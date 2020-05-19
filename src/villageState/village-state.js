import { map } from '../map/map.js'

export class VillageState {
  constructor(place, parcels) {
    this.place = place
    this.parcels = parcels
  }

  // check if there is a path to the destination
  // if not, return the current state
  // else, create a state with a new place and to-be-delivered parcels
  move(destination) {
    if (map[this.place].includes(destination)) {
      // now arrive at destination,
      const parcels = this.parcels.map(parcel => {
        if (parcel.from === this.place) {
          // pick the parcel and set its from to the destination
          console.log(`pick ${parcel.from} ${parcel.to}`)
          return { from: destination, to: parcel.to }
        } else {
          return parcel // not picked
        }
      })
      const undeliveredParcels = parcels.filter(p => p.from !== p.to)
      return new VillageState(destination, undeliveredParcels)
    } else {
      // no way to go, return current state
      return this
    }
  }
}
