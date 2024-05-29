import SectionStyled from "./Section.styled";

const Section = ({ children, variant }) => {
    return (
        <SectionStyled variant={variant}>
            {children}
        </SectionStyled>
    );
}

export default Section;