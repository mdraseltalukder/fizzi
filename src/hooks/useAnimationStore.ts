// store/animationStore.ts
import { create } from "zustand";

type AnimationStore = {
  masterTl: gsap.core.Timeline | null;
  setMasterTl: (tl: gsap.core.Timeline) => void;
};

export const useAnimationStore = create<AnimationStore>((set) => ({
  masterTl: null,
  setMasterTl: (tl) => set({ masterTl: tl }),
}));
