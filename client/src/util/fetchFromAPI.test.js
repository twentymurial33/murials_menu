import { it, expect } from "vitest";
import { queryAPI } from "./fetchFromAPI";

//Mocking fetch calls
//If the fetch call results in a 200 response, the onSuccess callback is fired
it("should return a 200 status code", () => {
  expect(queryAPI).toBe(200);
});

//If the fetch call results in a non-200 response the onError callback is fired

//If the method is POST a body option cannot be "nullish" (as in, null or undefined) and must be serializable to JSON.
