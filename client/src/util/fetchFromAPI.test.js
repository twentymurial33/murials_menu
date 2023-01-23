import { expect, test } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";

//If the fetch call results in a 200 response, the onSuccess callback is fired
test("the data is successfully fetched from the API", () => {
  const res = fetch(queryAPI());
  const result = res.json();
  expect(result.name).toBe("successful");
});

//If the fetch call results in a non-200 response the onError callback is fired

//If the method is POST a body option cannot be "nullish" (as in, null or undefined) and must be serializable to JSON.
