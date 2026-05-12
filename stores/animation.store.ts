import { create } from 'zustand';

interface AnimationState {
  canAnimate: boolean;
  setCanAnimate: (canAnimate: boolean) => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  canAnimate: false,
  setCanAnimate: (canAnimate) => set({ canAnimate }),
}));
