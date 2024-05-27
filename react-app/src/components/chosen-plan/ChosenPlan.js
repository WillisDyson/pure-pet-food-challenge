import { ChosenPlanOuter, ChosenPlanWrap } from './ChosenPlan.styled';
import TransitionPack from './transition-pack/TransitionPack';
import InterSectionImage from './inter-section-image/InterSection';
import OngoingPlan from './ongoing-plan/OngoingPlan';



const ChosenPlan = ({ plan }) => {


    return (
        <ChosenPlanOuter>
            <ChosenPlanWrap>
                <TransitionPack plan={plan} />
                <InterSectionImage />
                <OngoingPlan plan={plan} />
            </ChosenPlanWrap>
        </ChosenPlanOuter>
    )
}

export default ChosenPlan;