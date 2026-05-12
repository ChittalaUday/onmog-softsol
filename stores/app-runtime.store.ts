import { create } from 'zustand';

export type BootStage = 'BOOT' | 'INIT' | 'INTRO' | 'READY';

interface AppRuntimeState {
  stage: BootStage;
  setStage: (stage: BootStage) => void;
  introComplete: boolean;
  markIntroComplete: () => void;
}

export const useAppRuntimeStore = create<AppRuntimeState>((set) => ({
  stage: 'BOOT',
  setStage: (stage) => set({ stage }),
  introComplete: false,
  markIntroComplete: () => set({ introComplete: true, stage: 'READY' }),
}));
