import styled from "styled-components";

const StyledCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Center: React.FC = (props) => {
  return <StyledCenter>{props.children}</StyledCenter>;
};

export default Center;
