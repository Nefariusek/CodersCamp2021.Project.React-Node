import { useEffect, useState } from 'react';

// must give requestBody as a state variable
// ex.
// const [requestBody, setRequestBody] = useState({ test: 'test' });
// const { data, error, isLoading } = usePutData('/randomUrl', requestBody);

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
