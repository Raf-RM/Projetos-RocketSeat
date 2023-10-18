import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  padding-bottom: 40px;

  > main {
    display: grid;
    padding: 0px 123px ;
    overflow-y: auto;
    scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent;
  }
`;

export const ReturnButton = styled.div`
  padding: 40px 123px 24px;
  display: flex;
  align-items: center;

  >a{
    font-size: 16px;
    color: ${({theme})=>theme.COLORS.PINK};
    font-weight: 400;
  }
  >svg{
    color: ${({theme})=>theme.COLORS.PINK};
    margin-right: 8px;
  }
`;