import { Bttn2, Heading1 } from '@/components/elements';
import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { HeroMemoji } from '../../../../public/assets/images';
import { externalRoutes } from '@/utils/PortfolioRoutes';

const AboutHero = () => {
  return (
    <Wrapper className='grid gap-20 xl:grid-cols-2'>
      <div className='flex flex-col gap-5'>
        <Heading1 text='About Me' icon='🙋🏽' />

        <p className='font-medium text-secondary-default md:text-xl md:!leading-9'>
          Welcome to my digital playground!
        </p>

        <div className='flex flex-col gap-4 leading-9 text-white/90'>
          <p>
            I&apos;m a passionate Frontend Developer with a knack for crafting
            visually stunning and user-friendly web applications.
          </p>
          <p>
            My toolkit? A blend of HTML, CSS, JavaScript, TypeScript, React, and
            Next.js—all the ingredients for pixel-perfect, responsive designs
            that not only look good but also perform like a charm.
          </p>
          <p>
            My tech adventure kicked off in 2019, and since then, it&apos;s been
            a whirlwind of code, creativity, and continuous learning. Armed with
            a Bachelor of Science degree from the University of Port Harcourt,
            I&apos;ve dived deep into the world of web development, sharpening
            my skills through internships, job roles, and plenty of late-night
            coding sessions. I&apos;ve had the pleasure of working with some
            fantastic teams, from my early days at Kwalite Nigeria as a
            WordPress Developer and Content Manager to my time at Jobgam
            Technologies, where I supercharged our platform using Next.js and
            Redux. A personal highlight? Implementing a wallet feature and
            optimizing our SEO, which not only boosted our user base but also
            brought in some serious revenue! These days, I&apos;m leading the
            frontend team at MAJFintech, where I make sure we hit our deadlines,
            keep our code clean, and pass on the knowledge to the next
            generation of developers.
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

      <div className='flex flex-col gap-4'>
        <Image src={HeroMemoji} alt='hero image' />
        <p className='leading-9 text-white/90'>
          When I&apos;m not glued to my computer screen, you can find me diving
          into detective novels, smashing the ping pong table, or dominating the
          FIFA pitch. Let&apos;s create something amazing together!
        </p>
      </div>
    </Wrapper>
  );
};

export default AboutHero;
