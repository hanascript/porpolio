export const VHSFilter = ({ intensity = 0.75 }: { intensity?: number }) => {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* VHS Filter Overlays */}
      <div className='pointer-events-none fixed inset-0 z-9999'>
        {/* Scanlines */}
        <div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, ${0.1 * intensity}) 2px,
              rgba(0, 0, 0, ${0.1 * intensity}) 4px
            )`,
            animation: 'scanlines 0.1s linear infinite',
          }}
        />

        <div
          className='absolute inset-0'
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 100px,
              rgba(255, 255, 255, ${0.02 * intensity}) 100px,
              rgba(255, 255, 255, ${0.02 * intensity}) 102px,
              transparent 102px,
              transparent 200px
            )`,
            animation: 'tracking 8s linear infinite',
          }}
        />
      </div>
    </div>
  );
};
