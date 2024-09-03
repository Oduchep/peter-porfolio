import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { Wrapper } from '@/layout/components';

const ProjectsList = () => {
  const [activeTab, setActiveTab] = React.useState('company_projects');

  const data = [
    {
      label: 'Company Projects',
      value: 'company_projects',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'Personal Projects',
      value: 'personal_projects',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <Wrapper>
      <Tabs value={activeTab}>
        <TabsHeader
          className='mb-10 gap-10 rounded-none bg-transparent p-0'
          indicatorProps={{
            className:
              'bg-transparent border-b-2 border-secondary-default shadow-none rounded-none',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`w-fit px-4 py-5 text-base md:text-xl ${
                activeTab === value
                  ? 'font-semibold text-secondary-default'
                  : 'text-white'
              }`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Wrapper>
  );
};

export default ProjectsList;
