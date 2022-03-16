import { useEffect, useState } from 'react';

import { DEFAULT_HEADERS, REST_METHOD_POST } from '../constants/restResources';

/**
 * Custom hook updating data.
 * @param {string} url - address of request eg. 'http:localhost:8080/api/'
 * @param {Object} requestBody - body od request made by user, store this object in a state of component
 * @returns { Object string boolean }
 */

const usePostData = async (url, requestBody) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function postData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`, {
          method: REST_METHOD_POST,
          headers: DEFAULT_HEADERS,
          body: JSON.stringify(requestBody),
        });
        if (response.ok) {
          response.json();
          setData(response);
        }
      } catch (err) {
        console.error(err);
        setError('An error occured.');
      } finally {
        setIsLoading(false);
      }
    }
    postData();
  }, [url, requestBody]);

  return { data, error, isLoading };
};

export default usePostData;
