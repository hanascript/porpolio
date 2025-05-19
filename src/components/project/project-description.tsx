'use client';

import { useState, useEffect } from 'react';

type Props = {
  description: string;
}

export const ProjectDescription = ({ description }: Props) => {
  const [formattedDescription, setFormattedDescription] = useState<string[]>([]);

  useEffect(() => {
    setFormattedDescription(formatDescription(description));
  }, [description]);

  const formatDescription = (description: string) => {
    return description.split(',')
  }


  return (
    <div className='pb-2'>
      {formattedDescription.map((line, index) => (
        <p key={index}>[2025-04-22 10:58:12.003] [info] {line}</p>
      ))}

    </div>
  );
};
