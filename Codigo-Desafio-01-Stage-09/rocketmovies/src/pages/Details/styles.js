import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  > main {
    width: 100%;
    height: 110px;
    
    text-align: center;

    background-color: ${({theme})=>theme.COLORS.PINK};
    color: ${({theme})=>theme.COLORS.BACKGROUND_800};

  }
`;