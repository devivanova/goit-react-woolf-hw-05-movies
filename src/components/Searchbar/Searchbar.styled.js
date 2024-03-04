import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  border: 1px solid #8c4faf;
  overflow: hidden;
`;

export const FormField = styled.label`
  width: 100%;
  height: 100%;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
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

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity var(--animation-duration) var(--timing-function);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;