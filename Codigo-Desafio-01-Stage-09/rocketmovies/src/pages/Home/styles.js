import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > main {
    padding: 0 123px 85px;
    
    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        width: 207px;
        height: 47px;
      }
    }

    >div{
      height: 100vh;
      display: grid;
      gap: 24px;
    }
  }
`;