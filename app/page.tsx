import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
      <Hero>
        <Button
          className="animate-fade-in"
          href="/"
          variant="secondary"
          size="small"
        >
          Introducing Linear Insights <IconWrapper>→</IconWrapper>
        </Button>
        <HeroTitle className="animate-fade-in">
          Linear is a better way
          <br className="hidden md:block" /> to build products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in">
          Meet the new standard for modern software development.
          <br className="hidden md:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button
          className="animate-fade-in"
          href="/"
          variant="primary"
          size="large"
        >
          Get started{" "}
          <IconWrapper>
            <ChevronIcon />
          </IconWrapper>
        </Button>
        <img
          className="mt-[12.8rem]"
          src="/img/hero@4x.jpeg"
          alt="hero image"
        />
      </Hero>
    </Container>
  );
}
