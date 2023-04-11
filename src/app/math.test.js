import { render, screen } from "@testing-library/react";

import { sum } from "./math";

describe("func sum", () => {
  test("math", () => {
    expect(sum).toBeDefined()
  })

  test("only number", () => {
    expect(typeof sum(1, 2)).toBe("number")
  })

  // test == it // можно использовать и то и другое

  it("one argument", () => {
    expect(sum(7)).toBe(NaN)
  })

  it("many argument", () => {
    expect(sum(7, 7, 5)).toBe(14)
  })

})

// import "./math"
// describe("sum func", () => {
//   it("function is defined", () => {
//     expect(sum).toBeDefined();
//   })
// })