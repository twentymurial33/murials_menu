import fetchMock from "fetch-mock";

export function mockAPI() {
  fetchMock.mock("https://api.example.com/items", {
    Test: "Test",
    Test1: "Test1",
  });
}
