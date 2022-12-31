import styled from 'styled-components';
import { HiSearch } from "react-icons/hi";
 
export const Wrapper = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-color: teal
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border: 2px solid teal;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Icon = styled(HiSearch)`
  width: 32px;
  height: 32px;
  fill: teal;
`;










