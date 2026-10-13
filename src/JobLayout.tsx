import React from 'react';
import ExperienceElement from './ExperienceElement.js';
import List from './List.js';
import type { Job } from './types.js';

interface JobLayoutProps {
  job: Job;
  key: string;
}

const JobLayout: React.FC<JobLayoutProps> = ({ job, key }) => {
  return (
    <div key={key} className={'flex-col gap-4'}>
      <div className={'flex flex-col sm:flex-row gap-4'}>
        <p className={'font-medium italic pt-[5] sm:shrink-0'}>{job.dates}</p>
        <div className={'flex flex-col gap-[10]'}>
          <div className={'flex flex-col'}>
            <h3 className={'text-lg font-semibold'}>{job.job}</h3>
            <p className={'italic font-semibold'}>{job.companyName}</p>
            {job.companyLink && (
              <p className={'italic'}>
                <a href={job.companyLink}>{job.companyLink.toString()}</a>
              </p>
            )}
            {job.companyDescription && (
              <p className={'italic'}>{job.companyDescription}</p>
            )}
          </div>
          <p>{job.jobDescription}</p>
          <ExperienceElement inline title={'Команда'}>
            {job.team}
          </ExperienceElement>
          <ExperienceElement inline title={'Стек'}>
            {job.stack}
          </ExperienceElement>
          <ExperienceElement title={'Задачи'}>
            <List items={job.tasks} />
          </ExperienceElement>

          {/*todo: интегрировать кейсы*/}
          {/*<ExperienceElement title={'Интересные проекты'}>*/}
          {/*  <List items={job.cases} />*/}
          {/*</ExperienceElement>*/}
        </div>
      </div>
    </div>
  );
};

export default JobLayout;
