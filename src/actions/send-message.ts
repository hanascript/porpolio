'use server';

import { z } from 'zod';

const messageSchema = z.object({
  message: z.string().max(110),
});

export async function sendMessage(text: z.infer<typeof messageSchema>) {
  const result = messageSchema.safeParse(text);
  if (!result.success) {
    throw new Error('Invalid message format');
  }
  const { message } = result.data;

  const tokens = message.split(' ');

  // get the first token and check if its a command
  const firstToken = tokens[0];
  if (firstToken === 'cd') {
    const secondToken = tokens[1];
    return {
      type: 'command',
      request: 'request-cd',
      path: secondToken,
    };
  }

  console.log(tokens);
  return {
    type: 'message',
    request: 'send-message',
    path: ''
  };
}
