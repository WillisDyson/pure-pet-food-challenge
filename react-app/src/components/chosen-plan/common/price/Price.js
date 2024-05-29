import PriceStyled from "./Price.styled";

const Price = ({ price, variant }) => {

    return (
        <PriceStyled variant={variant}>£{price}</PriceStyled>
    )
}

export default Price;