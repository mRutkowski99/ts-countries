import CountryDetail from "../../components/CountryDetail/CountryDetail";
import Center from "../../utilities/Center";
import useFetchDetails from "./useFetchDetails";
import { useParams } from "react-router-dom";

const DetailInfo = () => {
  const params = useParams();
  const { isLoading, error, countryDetail } = useFetchDetails(params.country);

  return (
    <>
      {error && (
        <Center>
          <p>{error}</p>
        </Center>
      )}
      {!error && <CountryDetail countryDetail={countryDetail} />}
    </>
  );
};

export default DetailInfo;
