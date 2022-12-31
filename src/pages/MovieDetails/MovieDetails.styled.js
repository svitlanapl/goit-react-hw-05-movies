import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 100px;
`;

export const Image = styled.img`
  width: 700px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;
export const TitleOverview = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Inform = styled.div`
  padding: 40px 0 40px 100px;
  border-bottom: solid teal;
`;

export const Item = styled.li`
  padding-bottom: 10px;
  font-size: 20px;

  :hover {
    text-decoration: underline;
    color: teal;
    font-weight: bold;
  }
`;
