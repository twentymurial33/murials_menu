export const queryAPI = (options) => {
  const options = {
    url: "http://localhost:5000/menu_items/",
    onSuccess: (result) => console.log(result.data),
    onError: (result) => console.log(result.error),
    method: "GET",
  };
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
