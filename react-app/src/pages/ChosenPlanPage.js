import ChosenPlan from "components/chosen-plan/ChosenPlan";
import { useClickedBtn } from 'context/ClickedBtnContext';

const ChosenPlanPage = () => {
    const { clickedBtn } = useClickedBtn();

    return (
        <ChosenPlan plan={clickedBtn} />
    );
};

export default ChosenPlanPage;