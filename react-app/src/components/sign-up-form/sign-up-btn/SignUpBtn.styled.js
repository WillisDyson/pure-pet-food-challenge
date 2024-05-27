import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SignUpBtnLink = styled(Link)`
    background-color: #f2a900;
    border-radius: 5px;
    color: #274c46;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 10px;
    padding: 15px;
    text-decoration: none;
    transition: 0.3s;
  
    &:hover {
        background-color: #f1b62f;
    }

    ${props =>
    props.variant === 'secondary' &&
    css`
      background-color: #eae5dc;
      border: 2px solid #f2a900;
      color: #f2a900;
      font-weight: 500;
      
      &:hover {
        background-color: #efeae1;
        border-color: #f1b62f;
      }
    `}
`;

export default SignUpBtnLink;