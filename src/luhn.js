
const Digit = message => {
  let m = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
      i = message.length - 1,
      x = 0

  while (i >= 0) {
    let d = +message[i]
    if (d != d) {
      return -1
    }
    x += i-- & 1 ? d : m[d]
  }

  x = (10 - x % 10)
  return x == 10 ? 0 : x
}

const Validate = message => Digit(message) == 0
const Generate = message => `${message}${Digit(message)}`

module.exports = {
  Digit,
  Validate,
  Generate
}
