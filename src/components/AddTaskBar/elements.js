import { horizontalElements } from "../../styles/layoutsContainers";
import colors from "../../styles/colors";
import styled from "styled-components";

const AddTaskWrapper = styled.form`
  ${horizontalElements}
  background-color: ${colors.dark};
  border: 2px solid ${colors.grey};
  border-radius: 18px;
  overflow: hidden;
  padding: 6px 12px;
`;

const InputTask = styled.input`
  width: 100%;
  height: 30px;
  color: ${colors.lightWhite};
  background-color: transparent;
`;

export { AddTaskWrapper, InputTask };
