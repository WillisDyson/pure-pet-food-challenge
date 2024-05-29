import OngoingPlanDurationWrap from './OngoingPlanDuration.styled';

const OngoingPlanDuration = ({ plan }) => {
    return (
        <OngoingPlanDurationWrap>Every <b>{plan}</b> days</OngoingPlanDurationWrap>
    );
}

export default OngoingPlanDuration;