import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const TextInput = styled(TextField)``;

export const TextInputContainer = styled.div`
  margin-top: ${({ mt }) => (mt ? `${mt}rem` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}rem` : "0")};
  margin-left: ${({ ml }) => (ml ? `${ml}rem` : "0")};
  margin-right: ${({ mr }) => (mr ? `${mr}rem` : "0")};
`;
