import { TextInput } from "../../form/TextField";

export function Editor() {
  return (
    <div>
      <h2>Editor</h2>
      <TextInput
        fullWidth={true}
        margin="1"
        label="SKU"
        placeholder="Exemplo: {{.gtin}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Título"
        placeholder="Exemplo: {{.title}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Descrição"
        placeholder="Exemplo: {{.description}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Preço"
        placeholder="Exemplo: {{.price}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Link"
        placeholder="Exemplo: {{.link}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Imagem"
        placeholder="Exemplo: {{.image_link}}"
      />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Fabricante"
        placeholder="Exemplo: {{.brand}}"
      />

      <TextInput fullWidth={true} margin="1" label="Ingrediente ativo" />

      <TextInput
        fullWidth={true}
        margin="1"
        label="Disponibilidade"
        placeholder='{{eq .availability \"out of stock\"}}'
      />
    </div>
  );
}
