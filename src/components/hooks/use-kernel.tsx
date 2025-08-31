'use client';

import { create } from 'zustand';

type WindowType = 'about' | 'projects' | 'blog' | 'contact';

type State = {
  // Volume
  isVolumeDisabled: boolean;
  setIsVolumeDisabled: (disabled: boolean) => void;

  // Windows
  isAboutOpen: boolean;
  isProjectsOpen: boolean;
  isBlogOpen: boolean;
  isContactOpen: boolean;

  // Window focus/z-index system
  windowZIndices: Record<WindowType, number>;
  nextZIndex: number;

  // Actions
  setIsAboutOpen: (open: boolean) => void;
  setIsProjectsOpen: (open: boolean) => void;
  setIsBlogOpen: (open: boolean) => void;
  setIsContactOpen: (open: boolean) => void;

  focusWindow: (windowType: WindowType) => void;
  getWindowZIndex: (windowType: WindowType) => number;
};

export const useKernel = create<State>((set, get) => ({
  // Volume
  isVolumeDisabled: false,
  setIsVolumeDisabled: (disabled: boolean) => set({ isVolumeDisabled: disabled }),

  // Windows
  isAboutOpen: false,
  isProjectsOpen: false,
  isBlogOpen: false,
  isContactOpen: false,

  // Window focus system
  windowZIndices: {
    about: 1000,
    projects: 1000,
    blog: 1000,
    contact: 1000,
  },
  nextZIndex: 1001,

  // Actions
  setIsAboutOpen: open => {
    set({ isAboutOpen: open });
    if (open) get().focusWindow('about'); // Auto-focus when opening
  },

  setIsProjectsOpen: open => {
    set({ isProjectsOpen: open });
    if (open) get().focusWindow('projects');
  },

  setIsBlogOpen: open => {
    set({ isBlogOpen: open });
    if (open) get().focusWindow('blog');
  },

  setIsContactOpen: open => {
    set({ isContactOpen: open });
    if (open) get().focusWindow('contact');
  },

  focusWindow: (windowType: WindowType) => {
    const { nextZIndex } = get();
    set(state => ({
      windowZIndices: {
        ...state.windowZIndices,
        [windowType]: nextZIndex,
      },
      nextZIndex: nextZIndex + 1,
    }));
  },

  getWindowZIndex: (windowType: WindowType) => {
    return get().windowZIndices[windowType];
  },
}));
