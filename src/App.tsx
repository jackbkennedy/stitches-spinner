import React from "react";
import { Spinner } from "./Spinner";
import {styled} from './stitches.config';

const StyledContainer = styled('div', {
  minHeight: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

function App() {
  return (
    <StyledContainer>
      <Spinner size={1} thickness={2} variant="red" />
      <Spinner size={2} thickness={3} variant="blue" />
      <Spinner size={3} thickness={4} variant="green" />
      <Spinner size={4} thickness={2} variant="purple" />
    </StyledContainer>
  );
}

export default App;
