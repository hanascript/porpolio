export type TerminalMessage = {
  id: string;
  type: 'user' | 'server';
  message: string;
};
