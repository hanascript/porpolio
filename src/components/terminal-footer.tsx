'use client';

import { z } from 'zod';
import { ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { sendMessage } from '@/actions/send-message';

import { useHarddrive } from '@/components/hooks/use-harddrive';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

const messageSchema = z.object({
  message: z.string().max(110),
});

export const TerminalFooter = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setCurrentModule } = useHarddrive();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: '',
    },
  });

  const modules = ['projects', 'blogs', 'games'];

  const validModule = (path: string) => {
    return modules.includes(path);
  };

  const handleCommand = ({ type, request, path }: { type: string; request: string; path: string }) => {
    if (type === 'command') {
      switch (request) {
        case 'request-cd':
          if (validModule(path)) {
            setCurrentModule(path);
          }
          break;
        default:
          break;
      }
    }

    return;
  };

  // Toggle cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Update cursor position when input changes
  useEffect(() => {
    const message = form.watch('message');
    // Get the current value
    const value = message;

    // Create a temporary span to measure text width
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'pre';
    // Match the font of your input
    span.style.font = window.getComputedStyle(inputRef.current || document.body).font;
    span.textContent = value || '';

    document.body.appendChild(span);
    const width = span.getBoundingClientRect().width;
    document.body.removeChild(span);

    // Add a small padding
    setCursorPosition(width + 12);
  }, [form]);

  const onSubmit = async (values: z.infer<typeof messageSchema>) => {
    const response = await sendMessage(values);
    form.reset();

    handleCommand(response);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className='border bg-background rounded-xs text-secondary hover:cursor-pointer'
      onClick={handleContainerClick}
    >
      <div className='flex items-center justify-between text-background bg-primary p-2'>
        <p className='text-xs uppercase'>TERMINAL //</p>
        <p className='text-xs animate-pulse'>Click here and send me a message!</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className='flex items-center'>
                    <ChevronRight className='size-5 text-secondary -mr-4 pb-0.5' />
                    <div className='flex-1 relative'>
                      <Input
                        {...field}
                        ref={inputRef}
                        className='caret-transparent hover:cursor-pointer bg-transparent'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        maxLength={110}
                        autoComplete='off'
                      />
                      {isFocused && cursorVisible && (
                        <span
                          className='absolute h-4 w-2 bg-secondary'
                          style={{
                            top: '45%',
                            transform: 'translateY(-50%)',
                            left: `${cursorPosition}px`,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
