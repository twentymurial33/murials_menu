import { expect, it } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";

beforeEach(() => {
  fetch.resetMocks();
});

it("mocks the fetch request", async () => {
  fetch.mockResponseOnce(JSON.stringify({ title: "potato" }));
  const response = await queryAPI({
    url: "/",
    onSuccess: jest.fn(),
    onError: jest.fn(),
  });
  expect(response).toEqual({ title: "potato" });
  expect(fetch).toHaveBeenCalledTimes(1);
});

// test("should return data with a successful request", async () => {
//   queryAPI().catch((e) => {
//     expect(e.message).toBe("options parameter is not defined");
//   });
//   queryAPI({}).catch((e) => {
//     expect(e.message).toBe("url is not provided");
//   });
//   queryAPI({ url: "/" }).catch((e) => {
//     expect(e.message).toBe("onSuccess is not provided");
//   });
//   queryAPI({ url: "/", onSuccess: jest.fn() }).catch((e) => {
//     expect(e.message).toBe("onError is not provided");
//   });
// });

describe("test should return a failed response", () => {
  it("testing the fetch condition", async () => {
    fetch.mockReject(new Error("error message"));
    const result = { data: null, error: null };
    return await queryAPI({
      url: "/",
      onSuccess: jest.fn(),
      onError: jest.fn(),
    }).then(() => {
      expect(fetch).toEqual(result.error);
    });
  });
});
