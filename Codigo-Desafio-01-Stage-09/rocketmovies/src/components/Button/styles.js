import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({theme})=>theme.COLORS.PINK};
  color: ${({theme})=>theme.COLORS.BACKGROUND_800};

  padding: 0 32px;

  margin-top: 10px;

  border: none;
  border-radius: 8px;

  &:disabled {
    opacity: 0.5;
  }
`;
