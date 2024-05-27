import PriceWasStyled from "./PriceWas.styled";

const PriceWas = ({ price }) => {
    const priceToNumber = parseFloat(price);

    return (
        <PriceWasStyled>£{priceToNumber.toFixed(2)}</PriceWasStyled>
    )
}

export default PriceWas;