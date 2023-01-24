import { expect, test } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";

//If the fetch call results in a 200 response, the onSuccess callback is fired
test("should return data with a successful request", async () => {
  const onSuccess = jest.fn();
  const onError = jest.fn();
  return queryAPI()
    .then(onSuccess)
    .catch(onError)
    .finally(() => {
      expect(onSuccess).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
    });
});

//If the fetch call results in a non-200 response the onError callback is fired

test("should return error as true if api error", async () => {
  const onSuccess = jest.fn();
  const onError = jest.fn();
  expect(onSuccess).toBe(null);
  expect(onError).toBe(true);
});

//If the method is POST a body option cannot be "nullish" (as in, null or undefined) and must be serializable to JSON.
