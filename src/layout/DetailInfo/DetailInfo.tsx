import CountryDetail from "../../components/CountryDetail/CountryDetail";
import Center from "../../utilities/Center";
import useFetchDetails from "./useFetchDetails";
import { useParams } from "react-router-dom";

const DetailInfo = () => {
  const params = useParams();
  const { isLoading, error, countryDetail } = useFetchDetails(params.country);

  console.log(isLoading, countryDetail);

  return (
    <>
      {error && (
        <Center>
          <p>{error}</p>
        </Center>
      )}
      {(isLoading || countryDetail === null) && !error && (
        <Center>
          <p>Loading...</p>
        </Center>
      )}
      {!isLoading && countryDetail !== null && !error && (
        <CountryDetail countryDetail={countryDetail} />
      )}
    </>
  );
};

export default DetailInfo;
