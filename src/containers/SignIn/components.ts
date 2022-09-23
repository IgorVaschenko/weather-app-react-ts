import styled from 'styled-components' 

import theme from "theme/theme";
import googleGray from 'assets/google-gray.svg'
import googleWhite from 'assets/google-white.svg'

export const Google = styled.div`
  background-image: url(${googleGray});
  background-repeat:no-repeat;
  height:${theme.width[4]}px;
  width:${theme.height[4]}px;

  @media (max-width: 380px) { 
    margin-left: 30px; 
  }
`;
export const SignButton = styled.div`
  font-weight: ${theme.fontWeight[2]};
  font-size: ${theme.fontSize[1]}rem;
  color:  ${theme.colors.textColor};
  border-radius: ${theme.spaces[2]}px;
  padding-right: ${theme.spaces[2]}px;
  padding-left: ${theme.spaces[1]}px;
  position: absolute;
  top: 2vh;
  left: 1vw;
  display:flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0 0 8px 2px black;
  background-color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover  {
    background-color: black;
    color: rgba(255, 255, 255, 0.54);
  }
  &:hover > ${Google} {
    background-image: url(${googleWhite});
  }

  &:focus {
    box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);; 
    outline: 1px solid ${theme.colors.black};
  }

  &:focus > ${Google}  {
    background-image: url(${googleWhite});
  }

  @media (max-width: 620px) {
    margin: ${theme.spaces[1]}px;
    position: static;
  }
`;

export const Sign = styled.div`
  margin: ${theme.spaces[4]}px;

  @media (max-width: 380px) {
    font-size: 0;
  }
`
export const LogOutButton = styled.button`
  font-weight: ${theme.fontWeight[2]};
  font-size: ${theme.fontSize[1]}rem;
  color:  ${theme.colors.textColor};
  height:${theme.height[4]}px;
  border-radius: ${theme.spaces[2]}px;
  position: absolute;
  top: 2vh;
  left: 1vw;;
  box-shadow: 0 0 8px 2px black;
  background-color: inherit;
  padding: 0 10px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: black;
    color: rgba(255, 255, 255, 0.54);
  }

  &:focus {
    box-shadow: 0px 19px 60px rgb(0 0 0 / 8%);; 
    outline: 1px solid black;
  }

  @media (max-width: 620px) {
    margin: ${theme.spaces[1]}px;
    position: static;
}
`;