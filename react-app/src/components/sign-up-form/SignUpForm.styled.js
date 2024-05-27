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

export const InfoMessage = styled.div`
    color: #000000;
    font-size: 2rem;
    margin-top: 40px;
`

export const ErrorMessage = styled.div`
    color: #e90000;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 40px;
`