import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew})=> isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({theme})=> theme.COLORS.PINK};
  border: ${({theme, isNew})=> isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 10px;

  > button {
    border: none;
    background: none;
    color: ${({theme})=>theme.COLORS.PINK};

    padding: 16px;
  }

  > input {
    font-family: 'Roboto', sans-serif;
    display:flex;
    height: 56px;
    width: 100%;
    padding: 20px 16px;
    background: transparent;
    color: ${({theme})=>theme.COLORS.WHITE};
    border: none;

    &::placeholder{
      color: ${({theme})=> theme.COLORS.GRAY_100};
    }
  }
`;