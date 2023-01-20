import { it } from "vitest";
import { queryAPI } from "./fetchFromAPI";

//Mocking functions
it("should fetch all items", () => {
  queryAPI([]);
});
