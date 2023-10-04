import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ProductDetail from "@/components/ProductDetail";
import { Container } from "@/styles/widgets";
import * as styles from "@/styles/ProductPageStyles";
import { BackBtn } from "@/styles/widgets/Buttons";
import { fetchProductById } from "@/store/reducers/productSlice";

export default function Product() {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const product = useSelector((state: any) => state.product.product);
  const status = useSelector((state: any) => state.product.status);
  
  useEffect(() => {
    if (slug) {
      const productId = slug.toString();
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, slug]);
  const title = `Ecommerce | Product Detail`;
  return (
    <Layout title={title}>
      <styles.Cover>
        <Container>
          <Link href="/" passHref>
            <BackBtn>Go Back</BackBtn>
          </Link>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : status === "failed" ? (
            <p>Error: Unable to fetch product</p>
          ) : (
            status === "succeeded" && <ProductDetail product={product} />
          )}
        </Container>
      </styles.Cover>
    </Layout>
  );
}
