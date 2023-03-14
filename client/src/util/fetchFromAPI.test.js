import { expect, it } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";

describe("testing api", () => {
  //   beforeEach(() => {
  //     fetch.resetMocks();
  //   });
  // });
  //mocking fetch request
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
//Mocking all fetches

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

//mocking a failed request

describe("test should return a failed response", () => {
  it("testing fetch condition", () => {
    fetch.mockReject(new Error("error message"));
    const onSuccess = jest.fn();
    const onError = jest.fn();
    const handleError = {
      onError: error,
    };
    return queryAPI({ url: "/", onError })
      .then(onSuccess)
      .catch(() => {
        expect(handleError).toBe("error message");
      })
      .finally(() => {
        expect(onSuccess).not.toHaveBeenCalled();
        // expect(handleError).toHaveBeenCalled();
      });
  });
});
