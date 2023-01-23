export const queryAPI = async (options) => {
  const { url, onSuccess, onError, method, toast } = options;
  const result = {
    data: null,
    error: null,
  };
  const response = await fetch(url, method);
  if (response.ok) {
    result.data = await response.json();
    //trigger success toast on success

    onSuccess(result);
  } else {
    result.error = await response.json();
    //Trigger error toast on error

    onError(result);
  }
  console.log(result.data);
};
