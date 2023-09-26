import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as W from "@/styles/widgets";
import * as H from "./styles";
import CurrencySwitcher from "@/components/CurrencySwitcer";

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const header = document.getElementById("header")!;
    const top = document.body.getBoundingClientRect().top;
    if (top < -46) {
      !header.classList.contains("animate") && header.classList.add("animate");
    } else {
      header.classList.remove("animate");
    }

    window.onscroll = (e) => {
      const top = document.body.getBoundingClientRect().top;
      if (top < -46) {
        !header.classList.contains("animate") &&
          header.classList.add("animate");
      } else {
        header.classList.remove("animate");
      }
    };
  }, []);

  const toggleNavBar = () => {
    const navBar = document.getElementById("navBar")!;
    const overlay = document.getElementById("overlay")!;

    if (!navBar.classList.contains("open")) {
      navBar.classList.add("open");
      overlay.classList.add("open");
    } else {
      navBar.classList.remove("open");
      overlay.classList.remove("open");
    }
  };

  return (
    <H.Container id="header" route={router.pathname}>
      <W.Container style={{ position: "relative" }}>
        <H.Layout>
          <W.Flex gap={40}>
            <Image
              src="/assets/shared/icon-menu.svg"
              alt=""
              width={16}
              height={16}
              className="menu-icon2"
              onClick={toggleNavBar}
            />
            <W.Flex gap={42}>
              <Image
                src="/assets/shared/icon-menu.svg"
                alt=""
                width={16}
                height={16}
                className="menu-icon"
                onClick={toggleNavBar}
              />
              <Link href="/">
                <Image
                  src="/assets/shared/logo.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </Link>
            </W.Flex>
            <nav id="header-nav" aria-label="header-navigation">
              <Link href="/">HOME</Link>
            </nav>
          </W.Flex>
          <CurrencySwitcher />
        </H.Layout>
      </W.Container>
    </H.Container>
  );
}
