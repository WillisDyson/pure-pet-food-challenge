import OngoingPlanDetailsWrap from './OngoingPlanDetails.styled';
import OngoingPlanDuration from './ongoing-plan-duration/OngoingPlanDuration';
import OngoingPlanPricePerDay from './ongoing-plan-duration/ongoing-plan-price-per-day/OngoingPlanPricePerDay';

const OngoingPlanDetails = ({ plan }) => {

    return (
        <OngoingPlanDetailsWrap>
            <OngoingPlanDuration plan={plan} />
            <OngoingPlanPricePerDay plan={plan} />

        </OngoingPlanDetailsWrap>
    )
}

export default OngoingPlanDetails;