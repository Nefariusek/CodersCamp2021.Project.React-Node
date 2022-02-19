import { useEffect, useState } from 'react';

/**
 * Custom hook updating data.
 * @param {string} url - adress of request
 * @param {state} requestBody - body od request made by user
 * @returns { string object bool }
 */
const usePutData = async (url, requestBody) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function putData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        });
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    putData();
  }, [url, requestBody]);

  return { data, error, isLoading };
};

export default usePutData;
