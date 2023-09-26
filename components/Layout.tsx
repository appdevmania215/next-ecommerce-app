import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  title?: string;
  keywords?: string;
  desc?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title = "Ecommerce | Home",
  keywords = "men's clothing, women's clothing, jewelery, electronics",
  desc = "Buy products",
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
