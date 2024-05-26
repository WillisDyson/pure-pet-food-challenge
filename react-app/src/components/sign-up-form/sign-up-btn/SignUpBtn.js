import StyledSignUpBtn from "./SignUpBtn.styled";

const SignUpBtn = ({ variant, duration, onclick }) => {
    return (
        <StyledSignUpBtn onClick={onclick} to="/chosen-plan" data-variant={variant} data-plan={duration}>
            Sign up for {duration} days
        </StyledSignUpBtn>
    );
}

export default SignUpBtn;