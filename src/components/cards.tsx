export const EnhancedCard = () => {
  return (
    <div className='glass-effect glass p-6'>
      <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl' />
      <div className='relative z-10 text-black'>
        <h3 className=' font-semibold mb-2'>Enhanced Glass</h3>
        <p className=''>More sophisticated glass effect</p>
      </div>
    </div>
  );
};

export const BlackCard = () => {
  return (
    <div className='glass-effect dark-glass p-6'>
      <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl' />
      <div className='relative z-10'>
        <h3 className='text-white font-semibold mb-2'>Enhanced Dark Glass</h3>
        <p className='text-white/70'>More sophisticated glass effect</p>
      </div>
    </div>
  );
};
