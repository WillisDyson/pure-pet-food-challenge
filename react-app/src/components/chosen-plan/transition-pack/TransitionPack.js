import { useApi } from 'context/ApiContext';
import Section from 'components/chosen-plan/common/section/Section';
import TransitionPackText from './transition-pack-text/TransitionPackText';
import Price from 'components/chosen-plan/common/price/Price';
import PriceWas from 'components/chosen-plan/common/price/PriceWas';
import VoucherTag from 'components/chosen-plan/common/voucher-tag/VoucherTag';

const TransitionPack = ({ plan }) => {

    const { apiData } = useApi();
    const price = apiData.data[plan]?.price;
    const discount = apiData.data[plan]?.discount;
    const discountToDecimal = (100 - parseFloat(discount)) / 100;
    const priceWithDiscount = (Math.floor(price * discountToDecimal * 100) / 100).toFixed(2); // Calculates daily price to two decimal places, then rounds down

    return (
        <Section variant="transition-pack">
            <TransitionPackText />
            <Price price={priceWithDiscount} discount={discount} />
            <PriceWas price={price} />
            <VoucherTag discount={discount} />
        </ Section>
    );
}

export default TransitionPack;