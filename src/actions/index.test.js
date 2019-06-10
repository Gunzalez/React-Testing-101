import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
  test('returns an action of type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
