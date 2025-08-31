'use client';

import { useCallback, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';

import { version } from '@/lib/data';

const containerVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const messages = [
  'connecting to server...',
  'connection established',
  'loading user profile...',
  'profile loaded',
  'loading portfolio assets...',
  'assets loaded',
  'configuring workspace...',
  'workspace ready',
  'launching portfolio interface',
];

export const Preloader = () => {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const currentStepRef = useRef<number>(0);

  const handleTypeComplete = useCallback(() => {
    const currentStep = currentStepRef.current;
    const message = messages[currentStep];

    if (currentStep === messages.length - 1) {
      return;
    } else {
      setCompletedLines(prev => {
        if (prev.includes(message)) {
          return prev;
        }
        return [...prev, message];
      });

      currentStepRef.current = currentStep + 1;
    }
  }, []);

  const getCurrentMessage = () => {
    const currentStep = currentStepRef.current;
    return currentStep < messages.length ? messages[currentStep] : null;
  };

  const currentMessage = getCurrentMessage();

  return (
    <motion.div
      variants={containerVariants}
      initial='visible'
      exit='hidden'
      className='bg-background text-primary fixed inset-0 z-100 flex max-w-screen-2xl flex-col items-start justify-between p-4 font-sans text-sm'
    >
      <span className='opacity-50'>Hanascript Terminal v{version} | Admin: nathan_marcellous</span>
      <div className='space-y-1'>
        {completedLines.map((line, index) => (
          <div
            key={index}
            className='space-y-2'
          >
            <span>{line}</span>
          </div>
        ))}

        {currentMessage && (
          <div className='flex'>
            <div className='flex-1'>
              <Typewriter
                key={currentStepRef.current}
                onInit={typewriter => {
                  typewriter.typeString(currentMessage).callFunction(handleTypeComplete).start();
                }}
                options={{
                  delay: 8,
                  cursor: '',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
