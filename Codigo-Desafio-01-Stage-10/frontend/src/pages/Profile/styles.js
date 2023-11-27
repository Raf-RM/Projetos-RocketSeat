import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100%;
    height: 144px;
    display: flex;
    background-color: ${({theme})=>theme.COLORS.BROWN};
    padding: 0 123px;
  }
`;

export const Form = styled.form`
  width: 340px;

  >div:first-child{
    margin-bottom: 64px;
  }

  >div{
    display: grid;
    gap:8px;
    margin-bottom: 24px;

  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -95px auto 0;
  width: 186px;
  height: 186px;

  >img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  >label{
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: ${({theme})=>theme.COLORS.PINK};
    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    >svg{
      color: ${({theme})=>theme.COLORS.GRAY_200};
      font-size: 20px;
    }
    >input{
      display: none;
    }
  }
`;