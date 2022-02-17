import { useEffect, useState } from 'react';

const useDeleteData = async (url) => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function sendDeleteRequest() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}`, { method: 'DELETE' });
        setStatus(response.status);
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
  return { status, error, isLoading };
};

export default useDeleteData;
