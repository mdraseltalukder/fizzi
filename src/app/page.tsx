// app/page.tsx
import ViewCanvas from "@/components/ViewCanvas";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const client = createClient();
  const page = await client
    .getByUID("home_page", "home_page")
    .catch(() => notFound());

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />
      <ViewCanvas />
    </>
  );
}
