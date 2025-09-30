import CircleText from "@/components/CircleText";
import { FizziLogo } from "@/components/Logo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#FE6334]">
      <div className="relative flex justify-center mx-auto px-4 py-10 w-full max-w-4xl">
        <FizziLogo />
        <div className="top-0 right-24 absolute size-28 md:size-48 origin-center -translate-y-14 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
}
