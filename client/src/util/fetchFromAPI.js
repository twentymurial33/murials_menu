export const queryAPI = async (options) => {
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
    result.data = await response.json();
    onSuccess();
  } else {
    result.error = await response.text();
    onError();
  }
  console.log(result.data);
};
