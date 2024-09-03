import { ProjectsHero, ProjectsList } from '@/components/sections/projects';
import { PageSEO } from '@/layout/components';
import React from 'react';

const ProjectsPage = () => {
  return (
    <>
      <PageSEO title='Project by Peter Okerulu' />

      <div>
        <ProjectsHero />
        <ProjectsList />
      </div>
    </>
  );
};

export default ProjectsPage;
