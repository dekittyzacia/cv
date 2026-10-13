import classNames from 'classnames';
import React from 'react';
import { bodyStyles, textStyles } from './constants.js';
import { ru, ruTitles } from './content/ru.js';
import Header from './Header.js';
import JobLayout from './JobLayout.js';
import Section from './Section.js';

const Layout: React.FC = () => {
  return (
    <div className={classNames(bodyStyles, textStyles)}>
      <Header />

      <main>
        <Section>
          <div className={'flex gap-20'}>
            <div className={'basis-2/3'}>
              <h2 className={'text-xl font-semibold uppercase pb-[10]'}>
                {ruTitles.about}
              </h2>
              <p>{ru.about.description}</p>
            </div>

            <div className={'basis-1/3'}>
              <h2 className={'text-xl font-semibold uppercase pb-[10]'}>
                {ruTitles.stack}
              </h2>
              <p>{ru.hardSkills.join(', ')}</p>
            </div>
          </div>
        </Section>

        <Section title={ruTitles.experience}>
          {ru.experience.map((job) => (
            <JobLayout job={job} key={job.companyName} />
          ))}
        </Section>
      </main>

      <footer className="footer"></footer>
    </div>
  );
};

export default Layout;
