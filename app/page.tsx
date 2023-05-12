import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero";
import { Button, IconWrapper } from "@/components/button";
import { ChevronIcon } from "@/components/icons/chevron";
import { HeroImage } from "@/components/icons/hero-image";
import { Clients } from "./clients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Container className="overflow-hidden py-[6.4rem]">
          <Hero>
            <Button
              className="animate-fade-in opacity-0 translate-y-[-1rem]"
              href="/"
              variant="secondary"
              size="small"
            >
              Introducing Linear Insights <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] ">
              Linear is a better way
              <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubtitle>
            <Button
              className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
              href="/"
              variant="primary"
              size="large"
            >
              Get started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
    </>
  );
}
