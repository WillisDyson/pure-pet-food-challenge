import SectionStyled from "./Section.styled";

// Common section component

const Section = ({ children, variant }) => {
    // "Variant" allows different styling to be loaded
    return (
        <SectionStyled variant={variant}>
            {children}
        </SectionStyled>
    );
}

export default Section;