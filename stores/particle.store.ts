import { create } from 'zustand';

export type ParticlePhase = 'gathering' | 'rotating' | 'disperse';

interface ParticleState {
  isCanvasMounted: boolean;
  setCanvasMounted: (mounted: boolean) => void;
  phase: ParticlePhase;
  setPhase: (phase: ParticlePhase) => void;
}

export const useParticleStore = create<ParticleState>((set) => ({
  isCanvasMounted: false,
  setCanvasMounted: (isCanvasMounted) => set({ isCanvasMounted }),
  phase: 'gathering',
  setPhase: (phase) => set({ phase }),
}));
