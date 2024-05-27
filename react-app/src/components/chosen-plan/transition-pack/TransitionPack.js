import { useApi } from '../../../context/ApiContext';
import TransitionPackWrap from './TransitionPack.styled';
import TransitionPackText from './transition-pack-text/TransitionPackText';
import Price from '../common/price/Price';
import PriceWas from '../common/price/PriceWas';
import VoucherTag from '../common/voucher-tag/VoucherTag';

const TransitionPack = ({ plan }) => {

    const { apiData } = useApi();
    const price = apiData.data[plan]?.price;
    const discount = apiData.data[plan]?.discount;

    return (
        <TransitionPackWrap>
            <TransitionPackText />
            <Price price={price} discount={discount} />
            <PriceWas price={price} />
            <VoucherTag discount={discount} />
        </ TransitionPackWrap>
    );
}

export default TransitionPack;