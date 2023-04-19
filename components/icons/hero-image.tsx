"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { transform } from "typescript";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  return (
    // Wraping div to add perspective
    <div
      ref={ref}
      className="mt-[12.8rem] overflow-hidden [perspective:2000px]"
    >
      <div
        className={classNames(
          "transition-transform bg-hero-gradient bg-white bg-opacity-[0.01] border border-transparent-white rounded-lg",
          inView ? "transform-none" : "[transform:rotateX(25deg)]"
        )}
      >
        <img className="" src="/img/hero@4x.jpeg" alt="hero image" />
      </div>
    </div>
  );
};
