import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './GoBack.styled'

export const GoBack = ({ back, children }) => {
  return (
    <StyledLink to={back}>
      <HiArrowLeft size='24' />
      {children}
    </StyledLink>
  );
};
