import colors from "../../../styles/colors";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: ${colors.lightDark};
  height: 60px;
  padding: 12px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarItems = styled.div`
  background-color: red;
  width: 10px;
  height: 100%;
`;

const NavbarItem = styled.div``;

// Icons

// Content

export { NavbarWrapper, NavbarItems, NavbarItem };
