import { TextScroll } from '@/components/animations/text-scroll';
import { resume } from '@/lib/resume';

export const Services = () => {
  return (
    <article className='h-full flex flex-col gap-2 col-span-1 lg:col-span-9'>
      <div className='border bg-background p-2 rounded-xs'>
        <TextScroll text={`Services //`} />
      </div>
      <div className='border bg-background p-2 rounded-xs flex-1 flex flex-col'>
        <h2 className='py-4 text-secondary cursor-default select-none text-4xl'>SERVICES</h2>
        <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-4'>
          {resume.services.map(service => (
            <div
              key={service.name}
              className='space-y-2'
            >
              <h3 className='text-lg font-bold'>{service.name}</h3>
              <p>{service.description}</p>
              <ul className='mt-2 space-y-2 list-disc list-inside'>
                {service.service.map(service => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
