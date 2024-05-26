import styled from 'styled-components';
const StyledSignupBtn = styled.a`
    border: solid 1px #ffffff;
    color: #ffffff;
`;

const SignUpBtn = ({ type }) => {
    return (
        <StyledSignupBtn>Sign up for {type} days</StyledSignupBtn>
    );
}

export default SignUpBtn;