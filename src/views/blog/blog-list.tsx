'use client';

import { resume } from '@/lib/resume';
import { useHarddrive } from '@/components/hooks/use-harddrive';
import { cn } from '@/lib/utils';

export const BlogList = () => {
  const { activeBlog, setActiveBlog } = useHarddrive();

  return (
    <>
      <div className='bg-background px-1 py-2 text-xs text-secondary rounded-tl-xs'>Published Blogs</div>
      {resume.blogs.map(blog => (
        <div
          key={blog.id}
          className={cn(
            'text-xs flex items-center justify-between bg-background py-0.5 px-1 hover:cursor-pointer hover:text-sm transition-all',
            activeBlog.id === blog.id && 'bg-secondary border-background border text-background'
          )}
          onClick={() => setActiveBlog(blog.id)}
        >
          <div className='flex items-center gap-1.5'>
            {activeBlog.id === blog.id && <span className='size-1.5 rounded-full bg-background' />}
            <p>{blog.name}</p>
          </div>

          <span>-</span>
          <p>{blog.type}</p>
        </div>
      ))}
    </>
  );
};
