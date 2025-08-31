const CALENDLY_URL = 'https://calendly.com/hanascript';

export const LetsTalkButton = () => {
  const handleClick = () => {
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };
  return (
    <button
      className='glass text-secondary hover:bg-secondary/15 flex items-center justify-center px-4 py-2 text-sm hover:cursor-pointer'
      onClick={handleClick}
    >
      Let&apos;s Talk
    </button>
  );
};
