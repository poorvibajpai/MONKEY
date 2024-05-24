import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const useFetch = (url: string) => {
 const [data, setData] = useState<any>(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 // const controller = new AbortController();
 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = (await axios.get(BASE_URL + url)).data as ApiResponseType;
    if (!response.success) {
     throw new Error(response.message);
    }
    setData(response.data);
   } catch (error: any) {
    console.log(error.message);
    setError(error);
   } finally {
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
