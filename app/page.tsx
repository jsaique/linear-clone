import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header>
        <Container>header</Container>
      </header>
      <main>
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
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
