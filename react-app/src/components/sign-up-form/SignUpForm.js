import { useApi } from '../../context/ApiContext';
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

const SignUpForm = () => {
    const { apiData, loading } = useApi();

    if (loading) {
        return <div>Loading, waiting for API data.</div>;
    }

    return (
        <SignUpFormOuter>
            <SignUpBtnsWrap>
                {Object.keys(apiData.data).map((key, index) => (
                    <SignUpBtn
                        key={index}
                        duration={key}
                        variant={index === 0 ? 'secondary' : undefined} />
                ))}
            </SignUpBtnsWrap>
        </SignUpFormOuter>
    );
}

export default SignUpForm;