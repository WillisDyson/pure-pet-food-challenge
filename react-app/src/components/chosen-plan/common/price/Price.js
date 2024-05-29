import PriceStyled from "./Price.styled";

// Common price component to be reused

const Price = ({ price, variant }) => {

    return (
        <PriceStyled variant={variant}>£{price}</PriceStyled>
    )
}

export default Price;