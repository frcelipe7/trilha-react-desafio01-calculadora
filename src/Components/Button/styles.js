import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, .6) -2px 2px 2px, rgba(255, 255, 255, .3) 1px -1px 2px;
    transition: .3s;
    border: 1px solid #111;
    border-radius: 8px;
    font-family: Inter,sans-serif;
    font-size: 16px;
    height: 48px;
    line-height: 24px;
    padding: 0 25px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    background-color: #FF8552;
    color: #FFFFFF;

    &:hover {
        outline: 0;
        box-shadow: rgba(50, 50, 93, .5) -1px 1px 2px, rgba(255, 255, 255, .2) .4px -.4px 2px;
        background-color: #FFA37D;
    }
`;