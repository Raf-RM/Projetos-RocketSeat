import styled from 'styled-components';

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${({theme})=>theme.COLORS.WHITE};
  background-color: ${({theme})=>theme.COLORS.PURPLE};
  border-radius: 8px;
  padding: 5px 16px;
`;
