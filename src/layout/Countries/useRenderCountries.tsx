import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../store/AppContext";
import Country from "../../components/Country/Country";

interface ICountry {
  flagSrc: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const useRenderCountries = () => {
  const { isLoading, error, fetchData } = useFetch();
  const [countries, setCountries] = useState<JSX.Element[]>(
    [] as JSX.Element[]
  );
  const context = useContext(AppContext);

  const dataHandler = (data: any[]) => {
    setCountries(
      data.map((country, idx) => (
        <Country
          key={idx}
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
