import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;  
  height: 100vh;
  overflow-y: hidden;

  > main {
    padding: 0 123px 85px;
    height: 100vh;
    overflow-y: auto;

    
    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 32px;
        font-weight: 400;
      }

      a {
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

    > div{    
      width: 100%;
      max-height: 717px;
      display: grid;
      gap: 24px;
      margin: 40px 0 79px;

      overflow-y: auto;
      scrollbar-color: ${({theme})=>theme.COLORS.PINK} transparent;
    }
  }
`;