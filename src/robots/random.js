
import { map } from '../map/map.js'
import { randomPick } from '../shared/random.js'

export function goRandom(state) {
  return randomPick(map[state.place])
}
