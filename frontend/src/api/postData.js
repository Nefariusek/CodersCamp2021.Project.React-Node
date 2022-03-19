import { DEFAULT_HEADERS, REST_METHOD_POST } from '../constants/restResources';

/**
 * Post data function.
 * @param {string} url - request url (e.g. 'http:localhost:8080/api/users')
 * @param {Object} requestBody - request body
 * @returns { data: Object, error: Object } - object that contains response data and response error
 */

const postData = async (url, requestBody) => {
  let data = null;
  let error = null;

  try {
    const response = await fetch(url, {
      method: REST_METHOD_POST,
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(requestBody),
    });
    const result = await response.json();

    if (result.error) {
      throw new Error(result.error);
    } else {
      data = result;
    }
  } catch (err) {
    error = err;
  }

  return { data, error };
};

export default postData;
