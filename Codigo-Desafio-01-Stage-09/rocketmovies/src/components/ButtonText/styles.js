import styled from 'styled-components';

export const Container = styled.button`
  font-size: 14px;
  color: ${({theme, $isactive})=>$isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
  background: none;
  border: none;
`;