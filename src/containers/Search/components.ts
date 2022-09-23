import styled from 'styled-components'

import theme from "theme/theme";

export const SearchForm = styled.form`
  flex-basis: ${theme.flexBasis[6]}%;
  height: ${theme.height[4]}px;
  margin-top: ${theme.spaces[1]}px;
  display: flex;

  @media (max-width: 776px) {
    margin: ${theme.spaces[3]}px ${theme.spaces[0]}px ; 
    order: -1;
  }
`;
export const SearchInput = styled.input`
  font-size: ${theme.fontSize[2]}rem;
  font-weight: ${theme.fontWeight[2]};
  padding: ${theme.spaces[2]}px;
  border-radius: ${theme.spaces[5]}px 0 0 ${theme.spaces[5]}px;
  outline: none;
  border: none;
  flex: 0 1 90%;
  width:  ${theme.width[4]}px;

  &:focus {
    box-shadow: 0 0 15px #2196F3
  }

  @media (max-width: 567px) {
    padding: ${theme.spaces[3]}px;
    width:  ${theme.width[4]}px;
  }
`;
export const SearchButton = styled.button`
  border-radius: 0 ${theme.spaces[5]}px ${theme.spaces[5]}px 0;
  background-color: ${theme.colors.search};
  outline: none;
  border: none;
  flex: 1 1 120px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    background-color: ${theme.colors.searchHover};
    color: rgba(255, 255, 255, 0.54);
  }

  &:focus {
    box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);;
    outline: 1px solid black;
  }
`;