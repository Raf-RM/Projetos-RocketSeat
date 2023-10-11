import styled from 'styled-components';

export const Container=styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 123px;

  width: 100%;
  border-bottom: 1px solid ${({theme})=>theme.COLORS.GRAY_100};

  > h1 {
    margin-right: 64px;
    color: ${({theme})=>theme.COLORS.PINK};
  }

`;

export const Profile=styled.div`
  display: flex;
  align-items: center;
  margin-left: 64px;
  //margin-right: 123px;

  > div {
    text-align: end;
    
    span {
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
    }

    
  }

  > img {
    border-radius: 50%;
    border: 1px solid ${({theme})=>theme.COLORS.GRAY_100};
    width: 64px;
    height: 64px;
    margin-left: 9px;
  } 


`;

