import { resume } from '@/lib/resume';

import { TextScroll } from '@/components/animations/text-scroll';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { ProjectDetails } from './project/project-details';
import { ProjectImages } from './project/project-images';

export const MobileContent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='border bg-background p-2 rounded-xs'>
        <TextScroll text={`projects //`} />
      </div>
      <div className='border bg-background rounded-xs px-2'>
        <Accordion
          type='single'
          collapsible
        >
          {resume.projects.map((project, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
            >
              <AccordionTrigger>{project.name}</AccordionTrigger>
              <AccordionContent>
                <ProjectImages values={project.images} />
                <ProjectDetails
                  name={project.name}
                  details={project.details}
                />
                <div className='text-sm'>{project.description}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
