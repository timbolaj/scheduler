import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "reducers/application";

describe("Application reducer", () => {
  test("Throws an error with an unsupported type", () => {
    expect(() => reducer([], { type: null })).toThrowError();
  });
});
