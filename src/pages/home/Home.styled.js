import styled from 'styled-components';
import img from "../../components/images/image 60.jpg"

export const StyledSection = styled.section`
  border: 1px solid #000;
    background-image: url(${img});
    width: 100%;
    height: 100%;
`;

export const StyledDiv  = styled.div`
    width: 1085px;
    
    margin: 0 auto;
    text-align: center;
`;

export const StyledHeroTitle = styled.h1`
    margin-top: 297px;
    margin-bottom: 10px;
    color: blue;

    font-weight: 700;
    font-size: 64px;
    line-height: 1.25;

    text-align: center;
    font-family: Merriweather, serif;
`;

export const StyledHeroText = styled.p`
    font-family: Lato;
    color: red;

    font-weight: 400;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    text-align: center;
     padding-left: 200.5px;
    padding-right: 203.5px;
    margin: 0 auto;
    margin-bottom: 30px;
`;

export const StyledHeroButton = styled.button`
    font-family: Merriweather;
    color: red;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.7;
    text-align: center;
     
    margin: 0 auto;
    margin-bottom: 377px;

    border-radius: 8px;
    padding: 10px 24px;
    border: 1px solid;
    background-color: transparent;
`;