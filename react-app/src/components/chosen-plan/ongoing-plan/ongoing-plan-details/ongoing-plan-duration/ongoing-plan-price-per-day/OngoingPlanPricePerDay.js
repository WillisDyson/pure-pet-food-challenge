import { useApi } from 'src/context/ApiContext';
import Price from 'src/common/price/Price';
import OngoingPlanPricePerDayWrap from './OngoingPlanPricePerDay.styled';

const OngoingPlanPricePerDay = ({ plan }) => {
    const { apiData } = useApi();
    const ongoingPlanPrice = apiData.data[plan]?.price;
    const pricePerDay = Math.floor((ongoingPlanPrice / plan) * 100) / 100;



    return (
        <OngoingPlanPricePerDayWrap>
            <Price price={pricePerDay} variant="ongoing-plan" />
            <span class="price-per-day__sub">per day</span>
        </OngoingPlanPricePerDayWrap>
    )
}

export default OngoingPlanPricePerDay;