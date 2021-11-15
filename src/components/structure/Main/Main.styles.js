import styled from "styled-components";

export const Container = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 0.33fr 0.669fr;
  gap: 1rem;
  background-color: ${({ theme }) => `${theme.colors.neutral.light}`};

  & > * {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid;
    border-color: ${({ theme }) => `${theme.colors.neutral.medium}`};
    border-radius: 16px;
    background-color: ${({ theme }) => `${theme.colors.neutral.lightest}`};
    font-family: ${({ theme }) => `${theme.typography.fonts.secondary}`};
  }

  & > *:first-child {
    height: fit-content;
  }
`;
