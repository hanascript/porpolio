'use server';

type ServerProps = {
  command: string;
};

export async function Server({ command }: ServerProps): Promise<string> {
  const processCommand = async (cmd: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 100));

    const responses: { [key: string]: string } = {
      help: 'Available commands: help, status, clear, contact',
      status: 'System operational. All services running normally',
      contact: 'Email: hello@hanascript.com | Github: /hanascript | Discord: .tabu',
      clear: 'Terminal cleared.',
      default: `bash: ${cmd}: command not found. Type 'help' for available commands.`,
    };

    return responses[cmd.toLowerCase()] || responses.default;
  };

  return await processCommand(command);
}
