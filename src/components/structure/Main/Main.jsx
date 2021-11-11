import { Editor } from "../Editor";
import { Preview } from "../Preview";

import * as S from "./Main.styles";

export function Main() {
  return (
    <S.Container>
      <Editor />
      <Preview />
    </S.Container>
  );
}
