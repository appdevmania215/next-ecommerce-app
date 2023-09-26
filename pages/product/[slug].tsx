import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ProductDetail from "@/components/ProductDetail";
import { Container } from "@/styles/widgets";
import * as styles from "@/styles/ProductPageStyles";
import { BackBtn } from "@/styles/widgets/Buttons";

export default function Product({ title, prev }: any) {
  const products = useSelector((state: any) => state.product.products);
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) return <></>;
  const product = products.find((item: any) => item.id === +slug);
  return (
    <Layout title={title}>
      <styles.Cover>
        <Container>
          <Link href={prev} passHref>
            <BackBtn>Go Back</BackBtn>
          </Link>
          <ProductDetail product={product} />
        </Container>
      </styles.Cover>
    </Layout>
  );
}

export function getServerSideProps({ req }: any) {
  return {
    props: {
      title: `Ecommerce | Product Detail`,
      prev: req.headers.referer,
    },
  };
}
