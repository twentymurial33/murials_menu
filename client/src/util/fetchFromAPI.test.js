import { expect, test, it } from "@jest/globals";
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

test("should return data with a successful request", async () => {
  queryAPI().catch((e) => {
    expect(e.message).toBe("options parameter is not defined");
  });
  queryAPI({}).catch((e) => {
    expect(e.message).toBe("url is not provided");
  });
  queryAPI({ url: "/" }).catch((e) => {
    expect(e.message).toBe("onSuccess is not provided");
  });
  queryAPI({ url: "/", onSuccess: jest.fn() }).catch((e) => {
    expect(e.message).toBe("onError is not provided");
  });
});

describe("testing the fetch condition", () => {
  test("should test the conditional statement", () => {
    const result = {
      data: null,
      error: null,
    };
    const response = { json: jest.fn().mockResolvedValueOnce(result) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);
    return queryAPI().then((data) => {
      expect(data).toEqual(result);
    });
  });
});
