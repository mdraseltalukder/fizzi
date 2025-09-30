import { FizziLogo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="flex justify-center -mb-28 py-4">
      <FizziLogo className="z-10 h-20 text-sky-800 cursor-pointer" />
    </header>
  );
};
