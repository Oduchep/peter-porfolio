import { Bttn2, Heading1 } from '@/components/elements';
import { Wrapper } from '@/layout/components';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import React from 'react';

const ProjectsHero = () => {
  return (
    <Wrapper className='grid gap-20 xl:grid-cols-2'>
      <div className='flex flex-col gap-5'>
        <Heading1 text='My Projects' icon='✨' />

        <p className='font-medium text-secondary-default md:text-xl md:!leading-9'>
          Turning Ideas into Interactive Realities
        </p>

        <div className='flex flex-col gap-4 leading-9 text-white/90'>
          <p>
            Explore my projects where creativity meets code. Each application
            showcases my passion for developing seamless, user-friendly
            experiences that look great and work flawlessly. Dive in and
            discover the work that defines my journey as a frontend developer.
          </p>
        </div>

        <Bttn2
          className='mt-10 w-64 rounded-full bg-secondary-default text-base uppercase text-[#0A0A0A]'
          dotClassName='bg-[#0A0A0A]'
          href={externalRoutes?.RESUME}
          target='_blank'
          rel='noopener noreferrer'
        >
          Download Resume
        </Bttn2>
      </div>
    </Wrapper>
  );
};

export default ProjectsHero;
