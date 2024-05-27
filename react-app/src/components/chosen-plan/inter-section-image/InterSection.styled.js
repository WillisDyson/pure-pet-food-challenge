import styled from 'styled-components';

export const InterSectionImageWrap = styled.div`
    align-self: center;
    margin: 20px;
    position: relative;
`;

export const InterSectionArrowImg = styled.img`
    max-width: 40px;
`;

export const InterSectionLabel = styled.span`
    background-color: #4da3b3;
    border-radius: 6px;
    color: #ffffff;
    font-family: 'Roboto Condensed', 'Arial', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 3px 5px;
    position: absolute;
    left: -48px;
    top: 50%;
    transform: rotate(-6deg) translateY(-50%);;
`;
