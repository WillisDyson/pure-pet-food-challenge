import PriceWasStyled from "./PriceWas.styled";

// Common priceWas component to be reused (not reused in this instance)

const PriceWas = ({ price }) => {
    const priceToNumber = parseFloat(price);

    return (
        <PriceWasStyled>£{priceToNumber.toFixed(2)}</PriceWasStyled>
    )
}

export default PriceWas;