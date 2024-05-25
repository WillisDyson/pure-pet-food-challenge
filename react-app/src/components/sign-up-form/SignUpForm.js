import styled from 'styled-components';
import SignUpBtn from './sign-up-btn/SignUpBtn';

const SignUpFormWrapper = styled.div`
    background-color: red;
`;

const SignUpForm = () => {
    return (
        <SignUpFormWrapper>
            <SignUpBtn />
            <SignUpBtn />
        </SignUpFormWrapper>
    );
}

export default SignUpForm;