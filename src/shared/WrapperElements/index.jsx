import { Wrapper, Elements } from "./elements";

const WrapperElements = ({ children }) => {
  return (
    <Wrapper>
      <Elements>{children}</Elements>
    </Wrapper>
  );
};

export default WrapperElements;
