import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import * as P from "./styles";

export default function ProductItem({ product, reverse, center }: any) {
  const currency = useSelector((state: any) => state.currencyInfo.currency);
  const rates = useSelector((state: any) => state.currencyInfo.rates);

  let productPrice = `$ ${product.price}`;
  if (currency === "EUR") {
    productPrice = `€ ${(product.price * rates.EUR).toFixed(2)}`;
  } else if (currency === "GBP") {
    productPrice = `£ ${(product.price * rates.GBP).toFixed(2)}`;
  } else if (currency === "JPY") {
    productPrice = `¥ ${(product.price * rates.JPY).toFixed(2)}`;
  } else if (currency === "USD") {
    productPrice = `$ ${product.price}`;
  }

  return (
    <P.ProductItemCover reverse={reverse} image={product.image} center={center}>
      <div className="image"></div>
      <P.Content center={center}>
        <P.Name>{product.name}</P.Name>
        <P.Text center={center}>{product.description}</P.Text>
        <P.Amount>{productPrice}</P.Amount>
      </P.Content>
    </P.ProductItemCover>
  );
}
