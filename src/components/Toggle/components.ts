import styled from "styled-components";

import theme from "theme/theme";

export const ToggleBlock = styled.div`
    display: flex;
    justify-content:flex-end;
    flex-direction: row;
    font-size: ${theme.fontSize[2]}rem;
    font-weight: ${theme.fontWeight[0]};
    margin-top: ${theme.spaces[3]}px;

    @media (max-width: 620px) {
        font-size: ${theme.fontSize[1]}rem;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`;
export const ToggleSource = styled.div`
    display: flex;
    margin: ${theme.spaces[3]}px;

    @media (max-width: 620px) {
        margin: ${theme.spaces[3]}px auto;
        padding-right:${theme.spaces[5]}px;
    }
`;
export const ToggleSwitch = styled.div`
`;
export const LabelInfoLeft = styled.div<{ pointer: boolean }>`
    margin-right: ${theme.spaces[4]}px;
    margin-top: ${theme.spaces[2]}px;
    color:${(({ pointer }) => pointer ? '#CE723B' : 'none')};
    font-weight:${(({ pointer }) => pointer ? '700' : '500')};
    font-size:${(({ pointer }) => pointer ? '1.1rem' : '1.3rem')};

    @media (max-width: 420px) {
        font-size:${(({ pointer }) => pointer ? '0.75rem' : '0.8rem')};
    }
`;
export const LabelInfoRight = styled.div<{ pointer: boolean }>`
    margin-left:  ${theme.spaces[4]}px;
    margin-top: ${theme.spaces[2]}px;
    color:${(({ pointer }) => pointer ? '#CE723B' : 'none')};
    font-size:${(({ pointer }) => pointer ? '1.1rem' : '1.3rem')};
    font-weight:${(({ pointer }) => pointer ? '700' : '500')};
    @media (max-width: 420px) {
        font-size:${(({ pointer }) => pointer ? '0.75rem' : '0.8rem')};
    }
`;
export const ToggleLabel = styled.label`
    width: ${theme.width[5]}px;
    position: relative;
    display: inline-block;
    height: 34px;
`;
export const ToggleSpan = styled.span`
    top: ${theme.spaces[0]};
    left: ${theme.spaces[0]};
    right: ${theme.spaces[0]};
    bottom: ${theme.spaces[0]};
    position: absolute;
    cursor: pointer;
    background-color: #A3A3A3;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;
export const ToggleInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${ToggleSpan} {
        background-color: #515456;
    } 

    &:checked + ${ToggleSpan}:before{
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    } 

    &:focus + ${ToggleSpan}:before{
        box-shadow: 0 0 1px #515456;
    } 
`;
