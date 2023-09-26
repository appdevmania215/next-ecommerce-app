import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as MS from "./styles";
import { Container } from "@/styles/widgets";
import { setProducts } from "@/store/reducers/productSlice";
import { fetchProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const MainSection: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product.products);

  useEffect(() => {
    // Fetch products from the API
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (error: any) {
        console.error("Error fetching products:", error.message);
      }
    };

    getProducts();
  }, [dispatch]);

  return (
    <Container>
      <MS.GridContainer>
        {products.map((product: TProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
            rating={product.rating}
          />
        ))}
      </MS.GridContainer>
    </Container>
  );
};

export default MainSection;
