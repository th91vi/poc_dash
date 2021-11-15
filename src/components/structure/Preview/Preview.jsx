import { useState } from "react";
import mockData from "../../../../mock/4bio.json";

export function Preview() {
  const [productsList, setProductsList] = useState([]);

  const items = mockData.channel.item;

  const countSkus = (skuValue) => {
    if (!items[0].hasOwnProperty(skuValue)) return;

    const foundSkus = items.map((item) => ({
      sku: item[skuValue],
    }));

    setProductsList(foundSkus);
  };

  const findProperty = (property) => {
    if (!items[0].hasOwnProperty(property)) return;

    const newProductsList = productsList.map((product, index) => {
      if (!product.hasOwnProperty(property)) {
        const newSku = { ...product, [property]: items[index][property] };

        return newSku;
      }
    });

    setProductsList(newProductsList);
  };

  const handleSearch = (property) => {
    if (!productsList.length) {
      countSkus(property);
    } else {
      findProperty(property);
    }
  };

  return (
    <div>
      <h2>Preview</h2>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {productsList.map((item, index) => (
          <li key={index}>
            {Object.entries(item).map((entry, index) => (
              <pre key={index}>
                <strong>{`${entry[0]}: `}</strong>
                {`${entry[1]}`}
              </pre>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
