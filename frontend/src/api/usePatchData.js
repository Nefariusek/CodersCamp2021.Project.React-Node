import { useEffect, useState } from 'react';

import { DEFAULT_HEADERS, REST_METHOD_PATCH } from '../constants/restResources';

const usePatchData = (url, requestBody) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function sendPatchRequest() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`, {
          method: REST_METHOD_PATCH,
          headers: DEFAULT_HEADERS,
          body: JSON.stringify(requestBody),
        });
        setIsSuccess(response.ok);
        if (!response.ok) {
          const err = new Error(response.statusText);
          throw err;
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url, requestBody]);
  return { isSuccess, error, isLoading };
};

export default usePatchData;
