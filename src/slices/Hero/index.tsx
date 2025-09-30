"use client";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useStore } from "@/hooks/useStore";
import { useGSAP } from "@gsap/react";
import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { JSX } from "react";
import { Bubbles } from "./Bubbles";
import Scene from "./Scene";
import { TextSplitter } from "./TextSlitter";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="opacity-0 hero"
    >
      {isDesktop && (
        <View className="hidden md:block top-0 z-50 sticky -mt-[100vh] w-screen h-screen pointer-events-none hero-scene">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid">
        <div className="place-items-center grid mt-40 md:h-screen">
          <div className="place-items-center grid auto-rows-min text-center">
            <h1 className="font-black text-orange-500 md:text-[9rem] lg:text-[13rem] text-7xl uppercase leading-[.8] hero-header">
              <TextSplitter
                text={asText(slice.primary.heading1)}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="mt-12 font-semibold text-sky-950 text-5xl lg:text-6xl hero-subheading">
              <PrismicRichText field={slice.primary.subheading} />
            </div>
            <div className="font-normal text-sky-950 text-2xl hero-body">
              <PrismicRichText field={slice.primary.body} />
            </div>
            <Button
              buttonText={slice.primary.button_text}
              buttonLink={{
                link_type: "Web",
                url: "#",
              }}
              className="mt-12 hero-button"
            />
          </div>
        </div>

        <div className="z-[80] relative items-center gap-4 grid md:grid-cols-2 h-screen text-side">
          <PrismicNextImage
            className="md:hidden w-full"
            field={slice.primary.cans_img}
          />
          <div>
            <h2 className="font-black text-side-heading text-sky-950 text-6xl lg:text-8xl uppercase text-balance">
              <TextSplitter text={asText(slice.primary.heading2)} />
            </h2>
            <div className="mt-4 max-w-xl font-normal text-side-body text-sky-950 text-xl text-balance">
              <PrismicRichText field={slice.primary.body2} />
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
