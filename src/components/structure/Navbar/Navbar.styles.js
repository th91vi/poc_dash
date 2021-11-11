import styled from "styled-components";

export const NavBody = styled.nav`
  padding: 0 1rem;
  background-color: ${({ theme }) => `${theme.colors.app.primaryDark}`};
`;

export const NavContent = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding-inline-start: 0;
  padding-inline-end: 0;

  li {
    color: ${({ theme }) => `${theme.colors.neutral.lightest}`};
    font-family: ${({ theme }) => `${theme.typography.fonts.primary}`};
  }
`;
