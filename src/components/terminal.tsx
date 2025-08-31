'use client';

import { useCallback, useRef, useState } from 'react';
import { Server } from '@/server/server';
import Typewriter from 'typewriter-effect';

import { TerminalMessage } from '@/lib/types';
import { cn } from '@/lib/utils';

const defaultMessage: TerminalMessage[] = [
  {
    id: 'welcome-1',
    type: 'server',
    message: 'Welcome!',
  },
];

const MAX_HISTORY = 12;

export const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const responseIdRef = useRef<string>('');

  const [history, setHistory] = useState<TerminalMessage[]>(defaultMessage);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [currentResponse, setCurrentResponse] = useState<string>('');
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [isTypingResponse, setIsTypingResponse] = useState<boolean>(false);

  const handleTypeComplete = useCallback(() => {
    const responseId = responseIdRef.current;
    if (!responseId || !currentResponse || !currentCommand) return;

    setHistory(prev => {
      const userExists = prev.find(item => item.id === `user-${responseId}`);
      const serverExists = prev.find(item => item.id === responseId);

      if (userExists && serverExists) return prev;

      const newMessages = [];

      if (!userExists) {
        newMessages.push({
          type: 'user' as const,
          message: currentCommand,
          id: `user-${responseId}`,
        });
      }
      if (!serverExists) {
        newMessages.push({
          type: 'server' as const,
          message: currentResponse,
          id: responseId,
        });
      }

      const updatedHistory = [...prev, ...newMessages];

      if (updatedHistory.length > MAX_HISTORY) {
        return updatedHistory.slice(-MAX_HISTORY);
      }

      return updatedHistory;
    });

    setCurrentResponse('');
    setCurrentCommand('');
    setIsTypingResponse(false);
    responseIdRef.current = '';

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [currentResponse, currentCommand]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!currentInput.trim() || isTypingResponse) return;

    const userCommand = currentInput.trim();
    const commandId = `cmd-${crypto.randomUUID()}`;

    setCurrentInput('');
    setCurrentCommand(userCommand);
    responseIdRef.current = `server-${commandId}`;

    try {
      const response = await Server({ command: userCommand });

      if (userCommand === 'clear') {
        setHistory([]);
      }

      setCurrentResponse(response);
      setIsTypingResponse(true);
    } catch {
      setCurrentResponse('Error: Failed to process command');
      setIsTypingResponse(true);
    }
  };

  return (
    <div className='fixed bottom-0 left-0 z-50 m-4 hidden h-[450px] w-96 overflow-hidden lg:block'>
      <div className='text-primary flex h-full flex-col font-sans text-sm'>
        <div className='flex flex-1 flex-col justify-end'>
          {history.map(item => (
            <div
              key={item.id}
              className='mb-1 text-sm leading-tight'
            >
              <span>{item.message}</span>
            </div>
          ))}

          {currentCommand && isTypingResponse && (
            <div className='mb-1 text-sm leading-tight'>
              <span>{currentCommand}</span>
            </div>
          )}

          {currentResponse && isTypingResponse && (
            <div className='mb-4 flex items-center text-sm leading-tight'>
              <Typewriter
                key={responseIdRef.current}
                onInit={typewriter => {
                  typewriter.typeString(currentResponse).callFunction(handleTypeComplete).start();
                }}
                options={{
                  delay: 8,
                  cursor: '',
                }}
              />
            </div>
          )}
        </div>

        <div className='flex flex-shrink-0 items-center'>
          <span className={cn('mr-2', currentInput === '' ? 'text-gray-400' : 'text-primary')}>
            {'>'}
          </span>
          <input
            ref={inputRef}
            type='text'
            value={currentInput}
            onChange={handleInputChange}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
            placeholder='Type a command...'
            disabled={isTypingResponse}
            className='flex-1 bg-transparent placeholder-gray-500 outline-none disabled:opacity-50'
          />
        </div>
      </div>
    </div>
  );
};
