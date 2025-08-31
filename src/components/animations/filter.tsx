'use client';

export const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div className='text-secondary fixed top-0 -z-10 flex h-full w-full flex-col items-center justify-center'>
        <div className='relative'>
          <p className='font-satoshi text-primary-100 m-0 text-[4rem] leading-none font-black uppercase lg:text-[8rem]'>
            HANASCRIPT
          </p>
          <p className='text-primary-100 relative bottom-2 left-1 text-[0.6rem] uppercase lg:bottom-14 lg:left-3 lg:mt-10 lg:text-[0.875rem]'>
            ver 011 01110 00001 10110 00101
          </p>
        </div>
      </div>
    </>
  );
};
