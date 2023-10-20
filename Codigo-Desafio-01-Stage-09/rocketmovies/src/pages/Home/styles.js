import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
  height: 100vh;
  display: grid;
  padding-bottom: 40px;
  grid-template-rows: 116px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 123px;

    >h2 {
      font-size: 32px;
      font-weight: 400;
    }

    >a {
      width: 207px;
      height: 47px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      font-size: 16px;
      font-weight: 400;

      background-color: ${({theme})=>theme.COLORS.PINK};
      color: ${({theme})=>theme.COLORS.BACKGROUND_800};

      border: none;
      border-radius: 8px;  
      
      >svg{
        font-size: 20px;
      }
    }
  }
  > main {
    display: grid;
    padding: 0 123px;
    overflow-y: auto;
    scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent;  

    > div{    
      width: 100%;
      display: grid;
      gap: 24px;     
    }
  }
`;