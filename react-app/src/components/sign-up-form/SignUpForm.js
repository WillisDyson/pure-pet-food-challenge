import { useApi } from 'context/ApiContext';
import { useClickedBtn } from 'context/ClickedBtnContext';
import { InfoMessage, ErrorMessage, SignUpFormOuter, SignUpBtnsWrap } from './SignUpForm.styled';
import SignUpBtn from './sign-up-btn/SignUpBtn';

const SignUpForm = () => {
    const { apiData, loading, apiError } = useApi();
    const { setClickedBtn } = useClickedBtn();

    if (loading) {
        return <InfoMessage>Loading, waiting for API data.</InfoMessage>;
    }

    if (apiError) {
        return <ErrorMessage>Error, unable to fetch API data. Did you forget to start the API?</ErrorMessage>;;
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