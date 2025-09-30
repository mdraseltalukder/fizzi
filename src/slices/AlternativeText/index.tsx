"use client";

import { Bounded } from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import clsx from "clsx";
import type { JSX } from "react";
import Scene from "./Scene";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternativeTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-yellow-300 alternating-text-container text-sky-950"
    >
      <div>
        <div className="z-[100] relative grid">
          {/* view goes here */}

          <View className="top-0 left-0 absolute w-full h-screen alternating-text-view">
            <Scene />
          </View>

          {slice.primary.group_text.map((item, index) => (
            <div
              key={asText(item.heading)}
              className="place-items-center gap-x-12 grid md:grid-cols-2 h-screen alternating-section"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/1"
                )}
              >
                <div className="font-bold text-6xl text-balance">
                  <PrismicRichText field={item.heading} />
                </div>

                <div className="mt-4 text-xl">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
