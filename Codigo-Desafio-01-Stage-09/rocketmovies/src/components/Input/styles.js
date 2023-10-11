import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  display: flex;

  background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

  border-radius: 10px;


  > input {
    width: 100%;
    height: 56px;
    background: transparent;
    border: none;
    color: ${({theme})=>theme.COLORS.WHITE};
    padding-left: 24px;

    &::placeholder {
      color: ${({theme})=>theme.COLORS.GRAY_100};
    }
  }

`;