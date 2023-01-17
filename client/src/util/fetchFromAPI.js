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
    onSuccess();
  } else {
    result.error = await response.text();
    result.error = response.text({ message: "paylod not correct" });
    onError();
  }
  console.log(result.data);
};
