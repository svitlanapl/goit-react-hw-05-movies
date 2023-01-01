import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './GoBack.styled'

export const GoBack = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size='20' />
      {children}
    </StyledLink>
  );
};
