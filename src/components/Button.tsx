import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return (
    <PrismicNextLink
      className={clsx(
        "bg-orange-600 hover:bg-orange-700 px-5 py-4 rounded-xl font-bold text-white text-xl md:text-2xl text-center uppercase tracking-wide transition-colors duration-150",
        className
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
