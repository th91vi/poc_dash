import { TextInput } from "../../form/TextField";
import { useDispatch } from "react-redux";

import { SEARCH_SKU } from "../../../store/slices/productSlice";

export function Editor() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Editor</h2>
      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="SKU"
        placeholder="Exemplo: {{.gtin}}"
        onChange={(e) => dispatch(SEARCH_SKU({ skuValue: e.target.value }))}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Título"
        placeholder="Exemplo: {{.title}}"
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Descrição"
        placeholder="Exemplo: {{.description}}"
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Preço"
        placeholder="Exemplo: {{.price}}"
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Link"
        placeholder="Exemplo: {{.link}}"
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Imagem"
        placeholder="Exemplo: {{.image_link}}"
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Fabricante"
        placeholder="Exemplo: {{.brand}}"
      />

      <TextInput fullWidth={true} mt="1" mb="1" label="Ingrediente ativo" />

      <TextInput
        fullWidth={true}
        mt="1"
        label="Disponibilidade"
        placeholder='{{eq .availability \"out of stock\"}}'
      />
    </div>
  );
}
