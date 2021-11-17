import { useSelector } from "react-redux";
import { ProductCard } from "../../contexts/product/ProductCard";

export function Preview() {
  const { productList } = useSelector((state) => state.product);

  return (
    <>
      <h2>Preview</h2>
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
        ) => (
          <ProductCard
            key={index}
            sku={sku}
            title={title}
            description={description}
            price={price}
            link={link}
            image_link={image_link}
            brand={brand}
            activeIngredient={activeIngredient}
            availability={availability}
          />
        )
      )}
    </>
  );
}
