import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../store/AppContext";
import Country from "../../components/Country/Country";

const useRenderCountries = () => {
  const { isLoading, error, fetchData } = useFetch();
  const [countries, setCountries] = useState<JSX.Element[] | null>(null);
  const context = useContext(AppContext);

  const dataHandler = (data: any[]) => {
    setCountries(
      data
        .sort((a, b) => (a.name.common < b.name.common ? -1 : 1))
        .map((country, idx) => (
          <Country
            key={idx}
            id={idx}
            flagSrc={country.flags.svg}
            name={country.name.common}
            population={country.population.toLocaleString("en-US")}
            region={country.region}
            capital={country.capital}
          />
        ))
    );
  };

  useEffect(() => fetchData(context.endPoint, dataHandler), [context.endPoint]);

  return {
    countries,
    isLoading,
    error,
  };
};

export default useRenderCountries;
