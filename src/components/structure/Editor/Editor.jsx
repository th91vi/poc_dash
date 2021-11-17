import { TextInput } from "../../form/TextField";
import { useDispatch, useSelector } from "react-redux";

import {
  SEARCH_SKU,
  SEARCH_PROPERTY,
} from "../../../store/slices/productSlice";

export function Editor() {
  const dispatch = useDispatch();
  const { sku } = useSelector((state) => state.product);

  return (
    <div>
      <h2>Editor</h2>
      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="EAN"
        placeholder="Exemplo: {{.gtin}}"
        onChange={(e) => dispatch(SEARCH_SKU({ skuValue: e.target.value }))}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Título"
        placeholder="Exemplo: {{.title}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "title",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Descrição"
        placeholder="Exemplo: {{.description}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "description",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Preço"
        placeholder="Exemplo: {{.price}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "price",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Link"
        placeholder="Exemplo: {{.link}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "link",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Imagem"
        placeholder="Exemplo: {{.image_link}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "image_link",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Fabricante"
        placeholder="Exemplo: {{.brand}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "brand",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        mb="1"
        label="Ingrediente ativo"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "activeIngredient",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />

      <TextInput
        fullWidth={true}
        mt="1"
        label="Disponibilidade"
        placeholder="{{.availability}}"
        onChange={(e) =>
          dispatch(
            SEARCH_PROPERTY({
              fieldName: "availability",
              propertyName: e.target.value,
            })
          )
        }
        disabled={!sku}
      />
    </div>
  );
}
