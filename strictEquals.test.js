function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) return false;
  if (
    (Object.is(a, -0) && Object.is(b, 0)) ||
    (Object.is(a, 0) && Object.is(b, -0))
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

  describe("When comparing the same values NaN", () => {
    test("Then it should return true", () => {
      const value = NaN;
      const expectedValue = false;

      const result = strictEquals(value, value);

      expect(result).toBe(expectedValue);
    });
  });

  describe("When comparing values 0 and -0", () => {
    test("Then it should return true", () => {
      const firstValue = 0;
      const secondValue = -0;
      const expectedValue = true;

      const result = strictEquals(firstValue, secondValue);

      expect(result).toBe(expectedValue);
    });
  });

  describe("When comparing values -0 and 0", () => {
    test("Then it should return true", () => {
      const firstValue = -0;
      const secondValue = 0;
      const expectedValue = true;

      const result = strictEquals(firstValue, secondValue);

      expect(result).toBe(expectedValue);
    });
  });

  describe("When comparing values 1 and '1'", () => {
    test("Then it should return false", () => {
      const firstValue = 1;
      const secondValue = "1";
      const expectedValue = false;

      const result = strictEquals(firstValue, secondValue);

      expect(result).toBe(expectedValue);
    });
  });

  describe("When comparing values true and false", () => {
    test("Then it should return false", () => {
      const firstValue = true;
      const secondValue = false;
      const expectedValue = false;

      const result = strictEquals(firstValue, secondValue);

      expect(result).toBe(expectedValue);
    });
  });

  describe("When comparing values false and false", () => {
    test("Then it should return true", () => {
      const firstValue = false;
      const secondValue = false;
      const expectedValue = true;

      const result = strictEquals(firstValue, secondValue);

      expect(result).toBe(expectedValue);
    });
  });
});
