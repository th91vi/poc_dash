import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background-color: ${({ theme }) => `${theme.colors.neutral.light}`};

  & > * {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid;
    border-color: ${({ theme }) => `${theme.colors.neutral.medium}`};
    border-radius: 16px;
    background-color: ${({ theme }) => `${theme.colors.neutral.lightest}`};
    font-family: ${({ theme }) => `${theme.typography.fonts.secondary}`};
  }
`;
