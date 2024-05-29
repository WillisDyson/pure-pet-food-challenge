import Section from 'components/chosen-plan/common/section/Section';
import OngoingPlanInner from './ongoing-plan-inner/OngoingPlanInner';
import OngoingPlanDetails from './ongoing-plan-details/OngoingPlanDetails';

const TransitionPack = ({ plan }) => {

    return (
        <Section variant="ongoing-plan">
            <OngoingPlanInner />
            <OngoingPlanDetails plan={plan} />
        </ Section>
    );
}

export default TransitionPack;