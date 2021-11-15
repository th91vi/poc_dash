import * as S from "./TextInput.styles";

export function TextInput(props) {
  return (
    <S.TextInputContainer {...props}>
      <S.TextInput {...props} />
    </S.TextInputContainer>
  );
}
