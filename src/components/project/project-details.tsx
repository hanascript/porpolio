'use client';


type Props = {
  name: string;
  details: {
    os: string;
    host: string;
    kernel: string;
    manager: string;
    languages: string;
    memory: string;
    packages: string;
    status: string;
  };
};

export const ProjectDetails = ({ name, details }: Props) => {

  return (
    <div className='pt-6 leading-none'>
      <p className='text-blue-300 lowercase'>{name}</p>
      <span className='text-secondary'>------------</span>
      <div className='space-y-0.5'>
        {
          Object.entries(details).map(([key, detail], index) => (
            <div
              className='flex gap-1 '
              key={index}
            >
              <p className='text-[#F4D7A1]'>{key}:</p>
              <p>{detail}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
