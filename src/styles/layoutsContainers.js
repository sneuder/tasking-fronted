import { css } from "styled-components";

const centerElements = css`
  display: grid;
  place-items: center;
`;

const horizontalElements = css`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
`;

export { centerElements, horizontalElements };
