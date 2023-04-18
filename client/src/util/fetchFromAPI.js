export const queryAPI = async (options, toast) => {
  if (options === undefined) {
    throw new Error("options parameter is not defined");
  }
  const { url, onError, method } = options;
  if (url === undefined) {
    throw new Error("url is not provided");
  }

  if (onError === undefined) {
    throw new Error("onError is not provided");
  }
  const result = {
    data: null,
    error: null,
  };
  const response = await fetch(url, { method });
  if (response.ok) {
    result.data = await response.json();
  } else {
    result.error(`Food item not saved.  Error: ${result.error}`);
    onError(`Food item not saved.  Error: ${result.error}`);
  }
  return result;
};
