import { useEffect, useState } from 'react';

const defaultURL = `https://jsonplaceholder.typicode.com/users?_limit=5`;

function useGet(url = defaultURL) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error status: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default useGet;
