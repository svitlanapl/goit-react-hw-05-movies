import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 10px 0;
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

export const CastItem = styled.li`
  padding-top: 30px;
  padding-left: 80px;
`;

export const CastImage = styled.img`
  padding-bottom: 10px;
  width: 500px;
  border-radius: 5px;
`;

export const CastText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;
