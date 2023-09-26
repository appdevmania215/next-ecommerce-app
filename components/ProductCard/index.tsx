import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import * as PC from "./styles";
import StarRating from "./StarRating";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  imageUrl,
  rating,
}) => {
  const currency = useSelector((state: any) => state.currencyInfo.currency);
  const rates = useSelector((state: any) => state.currencyInfo.rates);
  const router = useRouter();

  let productPrice = `$ ${price}`;
  if (currency === "EUR") {
    productPrice = `€ ${(price * rates.EUR).toFixed(2)}`;
  } else if (currency === "GBP") {
    productPrice = `£ ${(price * rates.GBP).toFixed(2)}`;
  } else if (currency === "JPY") {
    productPrice = `¥ ${(price * rates.JPY).toFixed(2)}`;
  } else if (currency === "USD") {
    productPrice = `$ ${price}`;
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <PC.CardContainer onClick={() => handleProductClick(id)}>
      <PC.ProductImage src={imageUrl} alt={title} />
      <PC.ProductTitle>{title}</PC.ProductTitle>
      <PC.ProductDescription>{description}</PC.ProductDescription>
      <PC.ProductInfo>
        <PC.ProductRatingInfo>
          <StarRating value={rating.rate} />
          <div title={`${rating.rate} out of 5 stars`}>{rating.count}</div>
        </PC.ProductRatingInfo>
        <PC.ProductPrice>{productPrice}</PC.ProductPrice>
      </PC.ProductInfo>
    </PC.CardContainer>
  );
};

export default ProductCard;
