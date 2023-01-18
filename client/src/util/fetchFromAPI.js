export const queryAPI = async (options) => {
  const { url, onSuccess, onError, method } = options;
  const result = {
    data: null,
    error: null,
  };
  const response = fetch(url, method);
  if (response.ok) {
    result.data = await response.json();

    onSuccess(result);
  } else {
    result.error = await response.json();

    onError(result);
  }
  console.log(result.data);
};
