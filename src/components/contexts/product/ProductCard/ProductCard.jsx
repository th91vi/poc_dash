import React from "react";

import * as S from "./ProductCard.styles";
import placeholderImg from "../../../../../static/placeholder-img.jpg";

export function ProductCard({
  sku,
  title,
  description,
  price,
  link,
  image_link,
  brand,
  activeIngredient,
  availability,
}) {
  return (
    <S.Container>
      <S.Colunm>
        <S.DataList>
          {sku && (
            <S.DataItem>
              <strong>EAN: </strong> {sku}
            </S.DataItem>
          )}
          {title && (
            <S.DataItem>
              <strong>Nome: </strong>
              {title}
            </S.DataItem>
          )}
          {description && (
            <S.DataItem>
              <strong>Descrição: </strong>
              {description}
            </S.DataItem>
          )}
          {price && (
            <S.DataItem>
              <strong>Preço: </strong>
              {price}
            </S.DataItem>
          )}
          {link && (
            <S.DataItem>
              <strong>Link: </strong>
              <a href={link} rel="noopener" target="_blank">
                {link}
              </a>
            </S.DataItem>
          )}
          {brand && (
            <S.DataItem>
              <strong>Fabricante: </strong>
              {brand}
            </S.DataItem>
          )}
          {activeIngredient && (
            <S.DataItem>
              <strong>Ingrediente ativo: </strong>
              {activeIngredient}
            </S.DataItem>
          )}
          {availability && (
            <S.DataItem>
              <strong>Disponibilidade: </strong>
              {availability}
            </S.DataItem>
          )}
        </S.DataList>
      </S.Colunm>
      {sku && (
        <S.Colunm>
          <S.ProductImage
            src={image_link || placeholderImg}
            alt={title}
            loading="lazy"
          />
        </S.Colunm>
      )}
    </S.Container>
  );
}
