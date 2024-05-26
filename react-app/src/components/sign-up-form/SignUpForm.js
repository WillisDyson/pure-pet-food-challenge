import { useApi } from '../../context/ApiContext';
import styled from 'styled-components';
import SignUpBtn from './sign-up-btn/SignUpBtn';

const SignUpFormWrapper = styled.div`
    background-color: red;
`;

const SignUpForm = () => {
    const { apiData, loading } = useApi();

    if (loading) {
        return <div>Loading, waiting for API data.</div>;
    }

    return (
        <SignUpFormWrapper>
            {Object.keys(apiData.data).map((key, index) => (
                <SignUpBtn key={index} type={key} />
            ))}
        </SignUpFormWrapper>
    );
}

export default SignUpForm;