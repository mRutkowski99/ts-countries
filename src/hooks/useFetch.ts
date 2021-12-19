import { useState, useCallback } from "react";

const BASE_URL = "https://restcountries.com/v3.1/";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData: (
    urlEndpoint: string,
    dataHandlerFn: (data: any[]) => void
  ) => void = useCallback(async (urlEndpoint, dataHandlerFn) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(BASE_URL + (urlEndpoint || "all"));
      console.log(BASE_URL + urlEndpoint);
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      dataHandlerFn(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
