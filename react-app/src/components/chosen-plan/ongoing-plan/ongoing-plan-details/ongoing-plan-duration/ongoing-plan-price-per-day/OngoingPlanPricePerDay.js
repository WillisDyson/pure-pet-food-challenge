import { useApi } from 'context/ApiContext';
import Price from 'components/chosen-plan/common/price/Price';
import OngoingPlanPricePerDayWrap from './OngoingPlanPricePerDay.styled';

const OngoingPlanPricePerDay = ({ plan }) => {
    const { apiData } = useApi(); // Pulling in global API context data
    const ongoingPlanPrice = apiData.data[plan]?.price;
    const pricePerDay = Math.floor((ongoingPlanPrice / plan) * 100) / 100; // Calculates daily price, then rounds down

    return (
        <OngoingPlanPricePerDayWrap>
            <Price price={pricePerDay} variant="ongoing-plan" />
            <span class="price-per-day__sub">per day</span>
        </OngoingPlanPricePerDayWrap>
    )
}

export default OngoingPlanPricePerDay;