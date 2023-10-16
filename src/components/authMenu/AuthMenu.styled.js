import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAuthMenuDiv = styled.div`
padding-right: 80px;
`;

export const StyledAuthMenuNavLink = styled(NavLink)`
margin-left: 10px;
`;

export const StyledAuthMenuLogIn = styled.button`
    color: #B29F7E;

    background-color: transparent;
    padding: 11px 20px;
    width: 160px;
    border-radius: 5px;
    border: 1px solid;

    font-family: Merriweather;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.37;

    cursor: pointer;

`;

export const StyledAuthMenuSignUp = styled.button`
    color: #FFFFFF;

    background-color: #B29F7E;
    padding: 11px 20px;
    width: 160px;
    border-radius: 5px;

    font-family: Merriweather;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.37;

    cursor: pointer;

`;