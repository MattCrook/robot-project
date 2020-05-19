import { all_places } from '../map/map.js'

export function randomPick(places = all_places) {
  const length = places.length
  let choice = Math.floor(Math.random() * length)
  return places[choice]
}
