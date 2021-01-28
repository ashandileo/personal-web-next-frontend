import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

const client = (endpoint, { body, method, headers, params } = {}) => {
  headers = {
    "content-type": "application/json",
    accept: "application/json",
    ...headers,
  };

  const config = {
    url: `${process.env.NEXT_PUBLIC_API_HOST}/${endpoint}`,
    method: method || "GET",
    headers: {
      ...headers,
    }
  };

  if (params) {
    config.params = decamelizeKeys(params);
  }

  if (body) {
    config.data = decamelizeKeys(body);
  }

  const onSuccess = (res) => {
    let data = res?.data.data || null;
    data = camelizeKeys(data);

    return {
      isSuccess: true,
      error: false,
      data,
    };
  };

  const onError = (err) => {
    let error = err?.response?.data;
    error = camelizeKeys(error);

    return {
      isSuccess: false,
      data: err?.data,
      error,
    };
  };

  return axios(config).then(onSuccess).catch(onError);
};

export default client;
