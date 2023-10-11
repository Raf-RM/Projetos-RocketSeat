import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main {
    width: 100%;
    height: 110px;
    
    text-align: center;

    background-color: ${({theme})=>theme.COLORS.PINK};
    color: ${({theme})=>theme.COLORS.BACKGROUND_800};

  }
`;