import styled from 'styled-components';

export const SignUpFormOuter = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

export const SignUpBtnsWrap = styled.div`
    display: flex;
    margin: 0 30px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;