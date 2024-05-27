import SignUpBtnLink from "./SignUpBtn.styled";

const SignUpBtn = ({ variant, duration, onclick }) => {
    return (
        <SignUpBtnLink onClick={onclick} to="/chosen-plan" variant={variant} data-plan={duration}>
            Sign up for {duration} days
        </SignUpBtnLink>
    );
}

export default SignUpBtn;