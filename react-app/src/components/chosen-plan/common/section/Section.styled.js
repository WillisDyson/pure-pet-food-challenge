import styled, { css } from 'styled-components';

const SectionStyled = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0 0 0 / 0.2);
    display: flex;
    margin: 0 auto;
    position: relative;

    ${props =>
        props.variant === 'transition-pack' &&
        css`
        padding: 12px 22px;
    `}

    ${props =>
        props.variant === 'ongoing-plan' &&
        css`
        flex-direction: column;
    `}
`;

export default SectionStyled;