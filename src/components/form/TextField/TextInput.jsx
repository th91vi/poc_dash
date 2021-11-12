import * as S from "./TextInput.styles";

export function TextInput(props) {
  return (
    <S.TextInputContainer margin={props.margin}>
      <S.TextInput {...props} />
    </S.TextInputContainer>
  );
}
