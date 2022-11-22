import { css } from "styled-components";
import colors from "./colors";

const SizeAddButton = css`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  cursor: pointer;
`;

const SizeIconsUser = css`
  color: ${colors.lightWhite};
  width: auto;
  height: 20px;
`;

const SizeIconsNavbar = (height) => css`
  color: ${colors.desacGrey};
  width: auto;
  height: ${height}px;
`;

export { SizeAddButton, SizeIconsNavbar, SizeIconsUser };
