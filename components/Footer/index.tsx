import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as F from "./styles";
import { Container } from "@/styles/widgets";
import FB from "../../public/assets/shared/icon-facebook.svg";
import TW from "../../public/assets/shared/icon-twitter.svg";
import INSTA from "../../public/assets/shared/icon-instagram.svg";

export default function Footer() {
  return (
    <F.Cover>
      <Container style={{ position: "relative" }}>
        <F.Top>
          <Image
            src="/assets/shared/logo.svg"
            width={100}
            height={100}
            alt=""
          />
          <nav id="footer-nav" aria-label="footer-navigation">
            <Link href="/" passHref>
              HOME
            </Link>
          </nav>
        </F.Top>
        <F.Text2>
          Ecommerce shop is an all in one stop to fulfill your product needs.
          Come and visit our demo facility - we&apos;re open 7 days a week.
        </F.Text2>
        <F.Bottom>
          <F.Text>Copyright 2023. All Rights Reserved</F.Text>

          <F.Socials>
            <FB height={24} width={24} />
            <TW height={24} width={24} />
            <INSTA height={24} width={24} />
          </F.Socials>
        </F.Bottom>
      </Container>
    </F.Cover>
  );
}
