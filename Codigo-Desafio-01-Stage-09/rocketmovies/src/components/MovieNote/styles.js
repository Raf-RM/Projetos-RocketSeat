import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 223px;
  border-radius: 16px;
  background-color: ${({theme})=>theme.COLORS.BROWN};
  color: ${({theme})=>theme.COLORS.GRAY};
  padding: 32px;

  >h2{
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: 700;
  }
  >p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
  }

  >footer{
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 20px;
    
  }
`;

export const Rating = styled.div`
  margin: 8px 0 10px;
  > svg {
    color: ${({theme})=>theme.COLORS.PINK};
  }
`;