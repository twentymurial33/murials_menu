export const queryAPI = (options) => {
  const {url, onSuccess, onError, method} = options;
  const result = {
    data: null,
    error: null,
  };
  const response = fetch(options);
  if (response.ok) {
    result.data = response.json();
    onSuccess();
  } else {
    result.error = response.text();
    onError();
  }
  console.log(result.data);
};
