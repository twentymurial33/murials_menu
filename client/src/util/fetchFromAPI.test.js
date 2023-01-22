import { it, expect } from "vitest";
import { queryAPI } from "./fetchFromAPI";

//Mocking functions
it("verify if food items are edited when user clicks button", async () => {
  queryAPI([]);
});
expect(fetch).toHaveBeenCalledWith("http://localhost:5000/menu_items", {
  method: "GET",
  body: JSON.stringify,
  headers: {
    "Content-Type": "application/json",
  },
});
