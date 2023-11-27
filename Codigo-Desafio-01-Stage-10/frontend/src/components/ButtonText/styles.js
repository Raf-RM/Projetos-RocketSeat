import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;

  a {
    display: flex;
    align-items: center;
    //justify-content: center;

    font-size: 16px;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.PINK};    
  }

  svg {
    color: ${({theme})=>theme.COLORS.PINK};
    margin-right: 8px;
  }
`;