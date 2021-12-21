import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useContext } from "react";
import AppContext from "../../store/AppContext";

const Loading = () => {
  const context = useContext(AppContext);

  const color = context.lightMode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)";

  return (
    <Loader type="Oval" color={color} height={100} width={100} timeout={3000} />
  );
};

export default Loading;
