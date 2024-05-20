import { expect, it } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";

describe("testing api", () => {
  it("it calls and returns mocked data", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "potato" }));
    const response = await queryAPI({
      url: "/",
      onSuccess: jest.fn(),
      onError: jest.fn(),
    });
    expect(response.data).toEqual("potato");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("test should return a failed response", () => {
  it("testing fetch condition", () => {
    fetch.mockReject(new Error("error message"));
    const onSuccess = jest.fn();
    const onError = new Error();
    return queryAPI({ url: "/", onError })
      .then(onSuccess)
      .catch((e) => {
        expect(e.message).toBe("error message");
      })
      .finally(() => {
        expect(onSuccess).not.toHaveBeenCalled();
      });
  });
});
