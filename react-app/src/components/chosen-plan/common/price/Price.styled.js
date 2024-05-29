import { styled, css } from "styled-components"

const PriceStyled = styled.span`
    color: #f4af43;
    font-family: 'Roboto Condensed', 'Arial', sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    margin-left: 20px;

    ${props =>
        props.variant === 'ongoing-plan' &&
        css`
        color: #000000;
        font-size: 2.2rem;
        margin: 0 4px 0 30px;
    `}
`

export default PriceStyled;