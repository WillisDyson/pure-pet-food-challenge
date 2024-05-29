import { useEffect } from "react";
import ChosenPlan from "src/components/chosen-plan/ChosenPlan";
import { useClickedBtn } from 'src/context/ClickedBtnContext';

const ChosenPlanPage = () => {
    const { clickedBtn } = useClickedBtn();

    return (
        <ChosenPlan plan={clickedBtn} />
    );
};

export default ChosenPlanPage;