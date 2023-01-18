export const queryAPI = async (options) => {
  const { url, onSuccess, onError, method } = options;
  const result = {
    data: null,
    error: null,
  };
  const response = fetch(url, method);
  if (response.ok) {
    result.data = await response.json();
    result.data = response.json({ message: "Payload is valid" });
    onSuccess(result);
  } else {
    result.error = await response.json();
    result.error = response.json({ message: "paylod not correct" });
    onError(result);
  }
  console.log(result.data);
};
