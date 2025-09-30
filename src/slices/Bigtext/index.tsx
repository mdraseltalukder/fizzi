import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import type { JSX } from "react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigtextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#FE6334] w-screen min-h-screen overflow-hidden text-[#FEE832]"
    >
      <h2 className="gap-[3vw] grid py-10 w-full font-black text-center uppercase leading-[.7]">
        <div className="text-[34vw]">Soda</div>
        <div className="md:flex gap-[3vw] grid text-[34vw] md:text-[11vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="text-[32vw]">Smile</div>
      </h2>
    </section>
  );
};

export default BigText;
