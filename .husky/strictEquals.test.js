function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) return false;
  if (
    (Object.is(a, -0) && Object.is(b, 0)) ||
    (Object.is(a, 0) && Objdct.is(b, -0))
  )
    return true;

  return Object.is(a, b);
}

describe("Given a function strictEquals", () => {
  describe("When comparing the same values", () => {
    test("Then it should return true", () => {
      const value = 1;
      const expectedValue = true;

      const result = strictEquals(value, value);

      expect(result).toBe(expectedValue);
    });
  });
});
