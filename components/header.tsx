"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { HamburgerIcon } from "./icons/hamburger";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <nav
          className={classNames(
            "h-[calc(100vh_-_var(--navigation-height))] md:block fixed top-navigation-height left-0 w-full overflow-auto bg-background",
            hamburgerMenuIsOpen ? "" : "hidden"
          )}
        >
          <ul className="flex flex-col md:flex-row md:items-center h-full [&_a]:text-md [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6 md:text-sm">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li className="hidden lg:block">
              <Link href="#">Integrations</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Company</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center ml-auto h-full">
          <Link href="#" className="text-sm mr-6">
            Log in
          </Link>
          <Button href="#">Sign up</Button>
        </div>

        <button
          className="ml-6"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
