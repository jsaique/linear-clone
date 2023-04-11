import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>
          Linear is a better way
          <br />
          to build products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <img src="/img/hero@4x.jpeg" alt="hero image" />
      </Hero>
    </Container>
  );
}
