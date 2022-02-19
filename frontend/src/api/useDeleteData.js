import { useEffect, useState } from 'react';

const useDeleteData = (url) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function sendDeleteRequest() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`, { method: 'DELETE' });
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
  }, [url]);

  return { isSuccess, error, isLoading };
};

export default useDeleteData;
