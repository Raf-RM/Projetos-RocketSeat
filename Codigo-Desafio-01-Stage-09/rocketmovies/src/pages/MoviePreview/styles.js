import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  padding-bottom: 40px;

  >div{
    padding: 40px 123px 24px;
  }

  > main {
    display: grid;
    padding: 0px 123px ;
    overflow-y: auto;
    scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent;
  }
`;