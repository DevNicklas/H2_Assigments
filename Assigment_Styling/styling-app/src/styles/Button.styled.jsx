import styled from 'styled-components'

export const StyledButton = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    padding 15px 60px;
    background-color: green;
    color: white;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`