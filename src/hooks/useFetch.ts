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

      if (!response.ok) throw new Error(response.status.toString());

      const data = await response.json();
      dataHandlerFn(data);
    } catch (error: any) {
      if ((error = "Error 404")) setError("No country found.");
      else setError("Something went wrong. Please try again later.");
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
