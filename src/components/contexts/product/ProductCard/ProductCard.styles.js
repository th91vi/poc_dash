import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 75% 25%;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.neutral.medium};
  outline-style: solid;
  outline-color: ${({ theme }) => theme.colors.neutral.light};
  outline-width: 2px;

  & + & {
    margin-top: 1.25rem;
  }
`;

export const Colunm = styled.div``;

export const DataList = styled.ul`
  list-style-type: none;
`;

export const DataItem = styled.li`
  strong {
    color: ${({ theme }) => theme.colors.app.secondaryDark};
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
`;
