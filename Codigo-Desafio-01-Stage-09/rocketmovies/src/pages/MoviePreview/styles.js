import styled from 'styled-components';

export const Container=styled.div`
  width: 100%;
  height: 100vh;
  //grid-template-rows: 116px auto;
  //grid-template-areas: "header" "content";

  > main {
    width: 100%;
    height: 100vh;
    padding: 0 123px;

    > header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin: 24px auto;

      h2 {
        font-size: 36px;
        font-weight: 500;
        color: ${({theme})=>theme.COLORS.WHITE};
      }

      svg {
        margin-top: 6px;
        font-size: 25px;
        color: ${({theme})=>theme.COLORS.PINK};
      }
    }
    
    > div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;
      
      img {
        border-radius: 50%;
        border: 1px solid ${({theme})=>theme.COLORS.GRAY_200};
        width: 16px;
        height: 16px;
      }

      svg {
        color: ${({theme})=>theme.COLORS.PINK};
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

`;

export const ReturnButton = styled.div`
  padding-left: 123px;
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

export const Rating=styled.div`

`;