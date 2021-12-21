import { SkeletonTheme } from "react-loading-skeleton";
import { useContext } from "react";
import AppContext from "../store/AppContext";

const SkeletonColor: React.FC = (props) => {
  const context = useContext(AppContext);

  const baseColor = context.lightMode ? "#ebebeb" : "#151d24";
  const highlightColor = context.lightMode ? "#f5f5f5" : "#161d25";

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      {props.children}
    </SkeletonTheme>
  );
};

export default SkeletonColor;
