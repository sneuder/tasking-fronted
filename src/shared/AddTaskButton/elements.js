import styled from "styled-components";

import { SizeAddButton } from "../../styles/sizesElements";
import { centerElements } from "../../styles/layoutsContainers";

import { FiPlus } from "react-icons/fi";

const AddButton = styled.button`
  ${SizeAddButton}
  ${centerElements}
  background: linear-gradient(to bottom left, #d955c4, #fd8b8e);
`;

const IconPlus = styled(FiPlus)`
  font-size: 16px;
  color: #fff;
`;

export { AddButton, IconPlus };
