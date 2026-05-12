import { create } from 'zustand';

export type TransitionStage = 'IDLE' | 'EXITING' | 'SWAPPING' | 'ENTERING' | 'COMPLETE';

interface TransitionState {
  stage: TransitionStage;
  setStage: (stage: TransitionStage) => void;
  isTransitioning: boolean; // Computed or explicit flag for backwards compat
  setIsTransitioning: (isTransitioning: boolean) => void;
  transitionLocked: boolean;
  setTransitionLocked: (locked: boolean) => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  stage: 'IDLE',
  setStage: (stage) => set({ stage }),
  isTransitioning: false,
  setIsTransitioning: (isTransitioning) => set({ isTransitioning }),
  transitionLocked: false,
  setTransitionLocked: (locked) => set({ transitionLocked: locked }),
}));
