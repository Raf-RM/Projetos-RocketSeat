import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 12px;

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

  border-radius: 10px;
  
  > svg {
      font-size: 20px;
      color: ${({theme})=>theme.COLORS.GRAY_100};
    }

  > input {
    width: 100%;
    background: transparent;
    border: none;
    color: ${({theme})=>theme.COLORS.WHITE};
    padding-left: 12px;

    &::placeholder {
      color: ${({theme})=>theme.COLORS.GRAY_100};
    }
  }

`;