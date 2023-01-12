export const editFood = async (onSuccess, onError, method) => {
  const response = await fetch(`http://localhost:5000/menu_items/`);
  method = method || "GET";
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
