'use client';

import { create } from 'zustand';

type State = {
  // Projects
  activeProjectIndex: number;
  setActiveProjectIndex: (index: number) => void;

  // Volume
  isVolumeDisabled: boolean;
  setIsVolumeDisabled: (disabled: boolean) => void;

  // Blogs
  // activeBlog: Blog;
  // setActiveBlog: (blogId: number) => void;

  // Panel State
  isDisabled: boolean;
  currentModule: string;

  // Games
  // activeGame: Game;
  // setActiveGame: (gameId: number) => void;

  setCurrentModule: (module: string) => void;
  setIsDisabled: (disabled: boolean) => void;
};

export const useKernel = create<State>(set => ({
  // Projects
  activeProjectIndex: 0,
  setActiveProjectIndex: (index: number) => set({ activeProjectIndex: index }),

  // Volume
  isVolumeDisabled: false,
  setIsVolumeDisabled: (disabled: boolean) => set({ isVolumeDisabled: disabled }),

  // Blogs
  // activeBlog: resume.blogs[0],
  // setActiveBlog: (blogId: number) => set({ activeBlog: resume.blogs.find(blog => blog.id === blogId) }),

  // Panel State
  isDisabled: false,
  currentModule: 'projects',
  setCurrentModule: module => set({ currentModule: module }),
  setIsDisabled: disabled => set({ isDisabled: disabled }),
}));
