import { useSelector } from "react-redux";

export function Preview() {
  const { productList } = useSelector((state) => state.product);

  return (
    <div>
      <h2>Preview</h2>
      <ul style={{ listStyleType: "none" }}>
        {productList.map(
          (
            {
              sku,
              title,
              description,
              price,
              link,
              image_link,
              brand,
              activeIngredient,
              availability,
            },
            index
          ) => {
            return (
              <li key={index} style={{ marginTop: "1rem" }}>
                {!!sku && (
                  <pre>
                    <strong>SKU: </strong>
                    {sku}
                  </pre>
                )}
                {!!title && (
                  <pre>
                    <strong>Título: </strong>
                    {title}
                  </pre>
                )}
                {!!description && (
                  <pre>
                    <strong>Descrição: </strong>
                    {description}
                  </pre>
                )}
                {!!price && (
                  <pre>
                    <strong>Preço: </strong>
                    {price}
                  </pre>
                )}
                {!!link && (
                  <pre>
                    <strong>Link: </strong>
                    {link}
                  </pre>
                )}
                {!!image_link && (
                  <pre>
                    <strong>Imagem: </strong>
                    {image_link}
                  </pre>
                )}
                {!!brand && (
                  <pre>
                    <strong>Fabricante: </strong>
                    {brand}
                  </pre>
                )}
                {!!activeIngredient && (
                  <pre>
                    <strong>Ingrediente ativo: </strong>
                    {activeIngredient}
                  </pre>
                )}
                {!!availability && (
                  <pre>
                    <strong>Disponibilidade: </strong>
                    {availability}
                  </pre>
                )}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
