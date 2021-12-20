import CountryDetail from "../../components/CountryDetail/CountryDetail";
import useFetchDetails from "./useFetchDetails";
import { useParams } from "react-router-dom";

const DetailInfo = () => {
  const params = useParams();
  const { isLoading, error, countryDetail } = useFetchDetails(params.country);

  console.log(isLoading, countryDetail);

  return (
    <>
      {(isLoading || countryDetail === null) && <p>Loading...</p>}
      {!isLoading && countryDetail !== null && (
        <CountryDetail countryDetail={countryDetail} />
      )}
    </>
  );
};

export default DetailInfo;
