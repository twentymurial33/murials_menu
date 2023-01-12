export const editFood = async (onSuccess, onError) => {
  //Allow the calling code to pass in an HTTP method
  //(e.g. PUT, POST) and default to GET if not provided.
  const response = await fetch(`http://localhost:5000/menu_items/`);
  const result = {
    data: null,
    error: null,
  };

  if (response.ok) {
    result.data = await response.json();
    onSuccess();
  } else {
    result.error = await response.text();
    onError();
  }
  console.log(result.data);
};
