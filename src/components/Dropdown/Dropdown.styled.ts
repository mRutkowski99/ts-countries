import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 20rem;
  position: relative;
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const Selected = styled.div`
  background-color: ${(props) => props.theme.colors.elements};
  border-radius: 0.5rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${(props) => props.theme.boxShadow};
  cursor: pointer;
`;

export const OptionsList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  transform: translateY(103%);
  border-radius: 0.5rem;
  list-style-type: none;
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const ListElement = styled.li`
  padding: 1rem 2rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.text === "hsl(200, 15%, 8%)"
        ? "hsl(0, 0%, 90%)"
        : "hsl(209, 23%, 17%)"};
  }
`;
