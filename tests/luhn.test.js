test("luhn.Digit", async () => {
  const luhn = require("../src/luhn.js")

  expect(luhn.Digit("00123014764700968321002")).toBe(4)
  expect(luhn.Digit("xy-1")).toBe(-1)
})

test("luhn.Validate", async () => {
  const luhn = require("../src/luhn.js")

  expect(luhn.Validate("001230147647009683210024")).toBe(true)
  expect(luhn.Validate("1234567812345678")).toBe(false)
  expect(luhn.Validate("xy-1")).toBe(false)
})

test("luhn.Generate", async () => {
  const luhn = require("../src/luhn.js")

  let generated = luhn.Generate("00123014764700968321002")

  expect(generated).toBe("001230147647009683210024")
  expect(luhn.Validate(generated)).toBe(true)
})

