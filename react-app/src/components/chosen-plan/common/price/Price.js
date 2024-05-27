import PriceStyled from "./Price.styled";

const Price = ({ price, discount }) => {
    const discountToDecimal = (100 - parseFloat(discount)) / 100;
    const priceAfterDiscount = Math.floor(parseFloat(price) * discountToDecimal * 100) / 100;

    return (
        <PriceStyled>£{priceAfterDiscount.toFixed(2)}</PriceStyled>
    )
}

export default Price;