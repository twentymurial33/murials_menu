import { toast } from "react-toastify";

export const queryAPI = async (options) => {
  const { url, onSuccess, onError, method } = options;
  const result = {
    data: null,
    error: null,
  };
  const response = fetch(url, method);
  if (response.ok) {
    result.data = await response.json();
    toast.success();
    //trigger success toast on success
    onSuccess(result);
  } else {
    result.error = await response.json();
    toast.error();
    //Trigger error toast on error
    onError(result);
  }
  console.log(result.data);
};
