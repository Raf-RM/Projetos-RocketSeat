import styled from 'styled-components';
import BackgroundImg from '../../assets/movietheater.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

`;

export const Form = styled.form`
  width: 340px;
  margin: auto 164px auto 134px;
  display: grid;

  > header {
    > h1 {
      color: ${({theme})=>theme.COLORS.PINK};
      font-size: 48px;
      font-weight: bold;
    }
    > p {
      font-size: 14px;
      font-weight: 400;
    }
  }

  > h2 {
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 500;

    margin: 48px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }

  > button {
    justify-self: center;
    align-self: center;
    margin-bottom: 48px;
  }

`;

export const Background = styled.div`
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
  flex: 1;
`;