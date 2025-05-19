'use client';

import { availableGames } from '@/lib/available-games';
import { resume } from '@/lib/resume';
import { create } from 'zustand';

type Project = {
  id: number;
  name: string;
  type: string;

  details: {
    os: string;
    host: string;
    kernel: string;
    manager: string;
    languages: string;
    memory: string;
    packages: string;
    status: string;
  };
  description: string;
  links: {
    live: string;
    repo: string;
  };
  animation: {
    R1: number;
    R2: number;
    K2: number;
  };
  images: {
    src: string;
    alt: string;
  }[];
};

type Blog = {
  id: number;
  name: string;
  type: string;
  description: string;
};

type Game = {
  id: number;
  name: string;
};

type State = {
  // Projects
  activeProject: Project;
  setActiveProject: (projectId: number) => void;

  // Blogs
  activeBlog: Blog;
  setActiveBlog: (blogId: number) => void;

  // Panel State
  isDisabled: boolean;
  currentModule: string;

  // Games
  activeGame: Game;
  setActiveGame: (gameId: number) => void;

  setCurrentModule: (module: string) => void;
  setIsDisabled: (disabled: boolean) => void;
};

export const useHarddrive = create<State>(set => ({
  // Projects
  activeProject: resume.projects[0],
  setActiveProject: (projectId: number) =>
    set({ activeProject: resume.projects.find(project => project.id === projectId) }),

  // Blogs
  activeBlog: resume.blogs[0],
  setActiveBlog: (blogId: number) => set({ activeBlog: resume.blogs.find(blog => blog.id === blogId) }),

  // Games
  activeGame: availableGames[0],
  setActiveGame: (gameId: number) => set({ activeGame: availableGames.find(game => game.id === gameId) }),

  // Panel State
  isDisabled: false,
  currentModule: 'projects',
  setCurrentModule: module => set({ currentModule: module }),
  setIsDisabled: disabled => set({ isDisabled: disabled }),
}));
