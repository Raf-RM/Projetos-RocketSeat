import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
    "header" 
    "content";

  > main {
    display: grid;
    padding: 0 123px;
    overflow-y: auto;
    margin-bottom: 85px;

    > Form {
      max-height: 700px;
      display: grid;
      overflow-y: auto;
      scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent ;

    }
  }

`;

export const Form = styled.form`
  display: grid;
  gap: 40px;

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }
  
  > div {
    display: flex;
    gap: 40px;

    > button:first-child{
      background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
      color: ${({theme})=>theme.COLORS.PINK};
    }
  }

  > Section {
    > div {
        display: flex;

        gap: 24px;
        flex-wrap: wrap;
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

  a {
    font-size: 16px;
    font-weight: 400;
    color: ${({theme})=>theme.COLORS.PINK};    
  }

  svg {
    color: ${({theme})=>theme.COLORS.PINK};
    margin-right: 8px;
  }
`;
