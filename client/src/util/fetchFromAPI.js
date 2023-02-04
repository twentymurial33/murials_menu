export const queryAPI = async (options) => {
  if (options === undefined) {
    throw new Error("options parameter is not defined");
  }
  const { url, onSuccess, onError, method } = options;
  if (url === undefined) {
    throw new Error("url is not provided");
  }
  if (onSuccess === undefined) {
    throw new Error("onSuccess is not provided");
  }
  if (onError === undefined) {
    throw new Error("onError is not provided");
  }
  const result = {
    data: null,
    error: null,
  };
  const response = await fetch(url, method);
  if (response.ok) {
    result.data = await response.json();
  } else {
    result.error = await response.text();
    //onError(result);
    console.warn(result.error);
  }
  return response;
  //console.log(result.data);
};
