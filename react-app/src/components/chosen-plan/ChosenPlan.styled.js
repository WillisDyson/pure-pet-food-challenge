import styled from 'styled-components';

export const ChosenPlanOuter = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

export const ChosenPlanWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;