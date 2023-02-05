export const queryAPI = async (options, toast) => {
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
    data: "",
    error: "",
  };
  const response = await fetch(url, method);
  if (response.ok) {
    return (result.data = await response.json());
  } else {
    result.error = await response.text();
    toast.error(`Food item not saved.  Error: ${result.error}`);
  }
};
