import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  padding-bottom: 40px;

  > div {
    margin: 40px 123px 24px;
  }

  > main {
    display: grid;
    padding: 0 123px;
    overflow-y: auto;
    scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent ;
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

