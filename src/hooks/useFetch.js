import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function callApi() {
      try {
        const res = await fetch(url);
        const result = await res.json();

        setResponse(result);
      } catch (error) {
        setResponse([]);
        setError(error);
      }

      setLoading(false);
    }

    callApi();
  }, [url]);

  return {
    response,
    loading,
    error,
  };
}
