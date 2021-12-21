import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { ICountryDetail } from "../../constants/interfaces";

const useFetchDetails = (selectedCountry: string | undefined) => {
  const { isLoading, error, fetchData } = useFetch();
  const [countryDetail, setCountryDetail] = useState<ICountryDetail | null>(
    null
  );

  const dataHandler = (data: any) => {
    const country = data.find(
      (element: { name: string }) =>
        element.name.toLowerCase() === selectedCountry
    );

    setCountryDetail({
      flag: country.flag,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population.toLocaleString("en-US"),
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital,
      domain: country.topLevelDomain[0],
      currencies: country.currencies.map((cur: any) => cur.name).join(", "),
      languages: country.languages.map((lng: any) => lng.name).join(", "),
      borderCountries:
        data
          .filter((element: { alpha3Code: string }) =>
            country.borders.includes(element.alpha3Code)
          )
          .map((element: { name: any }) => element.name) || [],
    });
  };

  useEffect(() => fetchData("v2/all", dataHandler), [selectedCountry]);

  return {
    isLoading,
    error,
    countryDetail,
  };
};

export default useFetchDetails;
