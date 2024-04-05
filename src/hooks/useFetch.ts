import { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/constants';

const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const controller = new AbortController();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL+url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const json = await response.json();
        setData(json.data);
        setLoading(false);
      } catch (error:any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function to cancel fetch on unmount or when URL changes
    // return () => {
    //   controller.abort();
    // };
  }, [url]); // Re-run effect when URL changes

  return { data, loading, error };
};

export default useFetch;
