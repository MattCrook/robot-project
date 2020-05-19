
const output = document.getElementById('output')

export function print(message) {
  output.innerHTML += `<h3>${message}</h3>`
}

export function clear() {
  output.innerHTML = ''
}
