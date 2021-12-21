import { StyledCountry, FlagContainer, Info } from "./Country.styled";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ICountry {
  id: number;
  flagSrc: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

const initial = {
  y: -40,
  opacity: 0,
};

const Country = ({
  flagSrc,
  name,
  population,
  region,
  capital,
  id,
}: ICountry) => {
  const navigate = useNavigate();
  const routeToDetailHandler = () => navigate(`/${name.toLowerCase()}`);
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: (id % 4) * 0.1,
        },
      });
    }
  });

  return (
    <StyledCountry
      onClick={routeToDetailHandler}
      ref={ref}
      initial={initial}
      animate={animation}
    >
      <FlagContainer flagSrc={flagSrc} />
      <Info>
        <h2>{name}</h2>
        <div>
          <h3>Population:</h3>
          <span>{population}</span>
        </div>
        <div>
          <h3>Region:</h3>
          <span>{region}</span>
        </div>
        <div>
          <h3>Capital:</h3>
          <span>{capital}</span>
        </div>
      </Info>
    </StyledCountry>
  );
};

export default Country;
