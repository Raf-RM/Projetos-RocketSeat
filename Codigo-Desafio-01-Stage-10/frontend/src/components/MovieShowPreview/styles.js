import styled from 'styled-components';

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 24px;

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
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
    }
  }
  > footer {
    display: flex;
    gap: 8px;
    margin: 40px 0;

    > span {
      font-size: 14px;
      padding: 8px 16px;
      background-color: ${({theme})=>theme.COLORS.BROWN};
    }
  }
  > content {
    font-size: 16px;
    font-weight: 400;
   text-align: justify;
  }
`;

export const Rating=styled.div`

`;