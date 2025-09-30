import { SliceZone } from "@prismicio/react";
import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";

import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const { state } = await searchParams;
  const slices = getSlices(state);

  return (
    <SliceSimulator background="" zIndex={10}>
      <div className="max-h-[1200px]">
        <SliceZone slices={slices} components={components} />
      </div>
    </SliceSimulator>
  );
}
