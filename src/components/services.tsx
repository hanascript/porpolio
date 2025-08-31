import { services } from '@/lib/data';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const Services = () => {
  return (
    <>
      {services.map((service, index) => (
        <Accordion
          type='single'
          collapsible
          key={index}
        >
          <AccordionItem
            value={`item-${index}`}
            className='border-none'
          >
            <AccordionTrigger className='text-xs'>{service.title}</AccordionTrigger>
            <AccordionContent className='text-xs'>
              <p className='text-xs leading-tight'>{service.description}</p>
              <ul className='list-inside list-disc space-y-2 pt-4 text-xs leading-tight'>
                {service.service.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </>
  );
};
