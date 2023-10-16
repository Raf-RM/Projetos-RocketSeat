import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header" 
    "content";

  //position: fixed;
  //top: 0;
  //overflow: hidden;


  > main {
    display: grid;
    padding: 0 123px;
    overflow-y: auto;
    margin-bottom: 85px;

    //> div {
    //  height: 100vh;
    //  display: grid;
      //overflow-y: scroll;

    //}
  }

`;

export const Form = styled.form`
  display: grid;
  gap: 40px;
  
  > div {
    display: flex;
    gap: 40px;

    > button:first-child{
      background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
      color: ${({theme})=>theme.COLORS.PINK};
    }
  }


  >section {
    
    h2 {
      font-size: 20px;
      font-weight: 400;
      color: ${({theme})=>theme.COLORS.GRAY_100};
    }
    div {
      min-height: 88px;
      background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
      border-radius: 8px;
      margin-top: 24px;
      padding: 16px;
    }
  }
`;

export const ReturnButton = styled.div`
  padding: 40px 123px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;

  button {
    font-size: 16px;
  }
  svg {
    color: ${({theme})=>theme.COLORS.PINK};
    margin-right: 8px;
  }
`;
