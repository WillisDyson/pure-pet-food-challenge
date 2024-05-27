import { useApi } from '../../context/ApiContext';
import { useClickedBtn } from '../../context/ClickedBtnContext';
import styled from 'styled-components';
import SignUpBtn from './sign-up-btn/SignUpBtn';

const SignUpFormOuter = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

const SignUpBtnsWrap = styled.div`
    display: flex;
    margin: 0 30px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const InfoMessage = styled.div`
    color: #000000;
    font-size: 2rem;
    margin-top: 40px;
`

const ErrorMessage = styled.div`
    color: #e90000;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 40px;
`

const SignUpForm = () => {
    const { apiData, loading, apiError } = useApi();
    const { setClickedBtn } = useClickedBtn();

    if (loading) {
        return <InfoMessage>Loading, waiting for API data.</InfoMessage>;
    }

    if (apiError) {
        return <ErrorMessage>Error, unable to fetch API data. Did you forget to run the API?</ErrorMessage>;;
    }

    const handleClick = (e) => {
        const clickedBtnVariant = e.target.getAttribute('data-plan');
        setClickedBtn(clickedBtnVariant);
    };

    return (
        <SignUpFormOuter>
            <SignUpBtnsWrap>
                {Object.keys(apiData.data).map((key, index) => (
                    <SignUpBtn
                        key={index}
                        duration={key}
                        variant={index === 0 ? 'secondary' : undefined}
                        onclick={handleClick} />
                ))}
            </SignUpBtnsWrap>
        </SignUpFormOuter>
    );
}

export default SignUpForm;