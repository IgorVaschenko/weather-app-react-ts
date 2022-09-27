import styled, { keyframes } from "styled-components";

import theme from "theme/theme";
import add from 'assets/add.svg'
import addGreen from 'assets/add-green.svg'
import update from 'assets/update.svg'
import del from 'assets/delete.svg'

const rightIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;
const left = keyframes`
    0% {opacity: 0;transform: translateX(-15%)}
    50% {opacity: 0.5;}
    100% {opacity: 1;transform: translateX(0);}
`;
const top = keyframes`
    0% {transform: translateY(-5%); opacity: 0;}
    70% { opacity: 0.5;}
    100% {opacity: 1; transform: translateY(0);}
`;
const red = keyframes`
    0% { box-shadow: none}
    10% {box-shadow: 0 0 15px red}
    20% { box-shadow: none}
    30% {box-shadow: 0 0 15px red}
    40% {box-shadow: none}
    50% {box-shadow: 0 0 15px red}
    60% {box-shadow: none}
    70% {box-shadow: 0 0 15px red}
    80% {box-shadow: none}
    90% {box-shadow: 0 0 15px red}
    100% {box-shadow: none}
`;

export const TodoBlock = styled.div<{ countEvent?: number }>`
    margin-left: ${theme.spaces[12]}px;
    height: ${theme.height[14]}vh;
    animation-name: ${top};
    animation-duration: ${theme.time[1]}s;
    overflow-y:${(({ countEvent }) => countEvent && countEvent > 4 ? 'scroll' : 'visible')}; 
    position: relative;

    @media (max-width: 820px) {
        overflow-y:${(({ countEvent }) => countEvent && countEvent > 3 ? 'scroll' : 'visible')}; 
    }
    @media (max-width: 620px) {
        margin-left: ${theme.spaces[0]}px;
    }
`;

export const AddEventButton = styled.button`
    width: ${theme.width[2]}px;
    height: ${theme.height[2]}px;
    display:flex;
    background-image:url(${add});
    background-color:inherit;
    background-repeat: no-repeat;
    cursor:pointer;
    border:none;
    outline:none;

    &:hover  {
        background-image:url(${addGreen});
        opacity:${theme.opacity[7]}
    }
`;

export const EventAddForm = styled.form`
    width:  100%;
    display: flex;      
    margin-top: ${theme.spaces[5]}px;
    margin-left:60px;
    animation-duration: ${theme.time[2]}s;
    animation-name:${rightIn};

    @media (max-width: 920px) {
        margin: 20px auto;
        width:  80%;
    }
    @media (max-width: 620px) {
        flex-wrap: wrap;
        margin: 0 auto;
        width:  none;
    }
    @media (max-width: 420px) {
    }
`;
export const EventEmpty = styled.div<{ show: boolean }>` 
    display:flex;
    margin: ${theme.spaces[5]}px;

    @media (max-width: 620px) {
        top:${theme.spaces[19]}px;
    }
`;
export const AddButton = styled.button`
    border-radius: ${theme.spaces[5]}px 0 0 ${theme.spaces[5]}px;
    font-size: ${theme.fontSize[1]}rem;
    font-weight: ${theme.fontWeight[2]};
    padding: ${theme.spaces[2]}px;
    color:${theme.colors.textColor};
    background: ${theme.colors.backgroundButton};
    flex-basis:  7%;
    outline: none;
    border: none;
    cursor:pointer;

    &:hover {
        opacity:${theme.opacity[5]}
    }

    @media (max-width: 920px) {
        flex-basis: ${theme.flexBasis[5]}%;
    }

    @media (max-width: 620px) {
        flex-basis: ${theme.flexBasis[12]}%;
        border-radius: ${theme.spaces[5]}px;
        margin:${theme.spaces[1]}px auto;
        order:0;
    }
`;

export const TextInput = styled.input<{ isConfirmButton: boolean; isEmpty: boolean }>`
    flex-basis: ${theme.flexBasis[5]}%;
    font-size: ${theme.fontSize[1]}rem;
    font-weight: ${theme.fontWeight[2]};
    padding: ${theme.spaces[2]}px;
    border-radius: 0 ${theme.spaces[5]}px  ${theme.spaces[5]}px 0;
    background: ${theme.colors.backgroundInput};  
    color:${theme.colors.textColor};
    border-radius:${(({ isConfirmButton }) => isConfirmButton ? `0` : `0 ${theme.spaces[5]}px  ${theme.spaces[5]}px 0`)}; 
    animation-name: ${(({ isEmpty }) => isEmpty ? red : `none`)}; 
    animation-duration: ${theme.time[4]}s;
    outline: none;
    border: none;
    cursor:pointer;

    &::placeholder {
        color: ${theme.colors.placeholder};  
    }

    &:hover {
        opacity:${theme.opacity[7]}
    }

    &:focus {
        box-shadow: 0 0 15px #2196F3
    }

    @media (max-width: 920px) {
        flex-basis: ${theme.flexBasis[12]}%;
    }

    @media (max-width: 620px) {
        border-radius:0 ${theme.spaces[5]}px ${theme.spaces[5]}px 0;
        flex-basis: ${theme.flexBasis[8]}%;
        order:-1;
        margin:5px auto 5px 0;
    }

    @media (max-width: 620px) {
        width:100%;
    }
    
    @media (max-width: 310px) {
        border-radius: ${theme.spaces[5]}px;
        flex-basis: ${theme.flexBasis[11]}%;
        margin:${theme.spaces[1]}px auto;
    }
`;
export const TimeInput = styled.input`
    flex-basis: 10%;
    font-size: ${theme.fontSize[1]}rem;
    font-weight: ${theme.fontWeight[2]};
    padding: ${theme.spaces[2]}px;
    background: ${theme.colors.backgroundDown};
    color:${theme.colors.textColor};
    outline: none;
    border: none;
    cursor:pointer;

    &:focus {
        box-shadow: 0 0 15px #2196F3
    }
    &:hover {
        opacity:${theme.opacity[7]}
    }

    @media (max-width: 920px) {
        flex-basis: ${theme.flexBasis[5]}%;
    }

    @media (max-width: 620px) {
        margin:${theme.spaces[1]}px 0 ${theme.spaces[1]}px auto ;
        order:-1;
        border-radius: ${theme.spaces[5]}px 0 0 ${theme.spaces[5]}px;
        flex-basis: ${theme.flexBasis[5]}%;
    }

    @media (max-width: 420px) {
        flex-basis: ${theme.flexBasis[4]}%;
    }

    @media (max-width: 310px) {
        border-radius: ${theme.spaces[5]}px;
        flex-basis: ${theme.flexBasis[11]}%;
        margin:${theme.spaces[1]}px auto;
    }
`;
export const EventConfirm = styled.div`
    font-size: ${theme.fontSize[1]}rem;
    font-weight: ${theme.fontWeight[2]};
    padding: ${theme.spaces[2]}px;
    background: ${theme.colors.backgroundButton};
    color:${theme.colors.textColor};
    border-radius:0 ${theme.spaces[5]}px ${theme.spaces[5]}px 0;
    flex-basis:  7%;
    outline: none;
    border: none;
    cursor:pointer;
    animation-name: ${left};
    animation-duration: ${theme.time[0]}s;

    &:focus {
        box-shadow: 0 0 15px #2196F3
    }
    &:hover {
        opacity:${theme.opacity[7]}
    }

    @media (max-width: 620px) {
        order:0;
        flex-basis: ${theme.flexBasis[12]}%;
        border-radius: ${theme.spaces[5]}px;
        margin:${theme.spaces[1]}px auto;
    }
`;

export const EventList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
`;
export const EventItem = styled.div`
    margin: ${theme.spaces[2]}px ${theme.spaces[4]}px;
    min-height: ${theme.height[2]}px;
    display:flex;
`;
export const EventTime = styled.div`
    height: ${theme.height[1]}px;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.dayWeek};
    padding: ${theme.spaces[1]}px ${theme.spaces[2]}px;
    border-radius: ${theme.spaces[3]}px;
`;
export const EventDescription = styled.div`
    color: ${theme.colors.textColor};
    text-overflow: ellipsis;
    overflow: hidden;
    display:block;
    margin: 3px 10px 0 20px;
`;
export const EventOperations = styled.div`
    display:flex;
`;
export const EventUpdate = styled.button`
    width: ${theme.width[2]}px;
    height: ${theme.height[2]}px;
    margin:${theme.spaces[1]}px;
    margin-left:${theme.spaces[3]}px;
    background-image:url(${update});
    background-color:inherit;
    background-repeat: no-repeat;
    cursor:pointer;
    border:none;
    outline:none;

    &:hover  {
        opacity:${theme.opacity[5]};
    }
`;
export const EventDelete = styled.button`
    width: ${theme.spaces[6]}px;
    height: ${theme.spaces[6]}px;
    margin:${theme.spaces[1]}px;
    background-image:url(${del});
    background-color:inherit;
    background-repeat: no-repeat;
    cursor:pointer;
    border:none;
    outline:none;

    &:hover  {
        opacity:${theme.opacity[5]};
    }
`;
