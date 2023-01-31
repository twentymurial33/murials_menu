import { expect, test, it } from "@jest/globals";
import { queryAPI } from "./fetchFromAPI";
//reset the fetch mock so the previous tests fon't interfere with current tests
beforeEach(() => {
  fetch.resetMocks();
});

it("mocks the fetch request", async () => {
  fetch.mockResponseOnce(JSON.stringify({ foodMenu: { title: "potato" } }));
  const response = await queryAPI();
  expect(response).toEqual({ foodMenu: { title: "potato" } });
  expect(fetch).toHaveBeenCalledTimes(1);
});
// fetch call results in a 200 response, the onSuccess callback is fired
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
//test to confirm that the onError callback is called
test("confirm onError callback is called", async () => {
  const options = {
    url: "http://localhost:5000/menu_items_2023/",
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };
  await queryAPI(options).then(() => {
    expect(options.onError).toBeCalled();
  });
});

//test to confirm onSuccess callback

test("confirm onSuccess callback is called", async () => {
  const options = {
    url: "http://localhost:5000/menu_items/",
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };
  await queryAPI(options).then(() => {
    expect(options.onSuccess).toBeCalled();
  });
});
