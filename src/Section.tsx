import React from 'react';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={'flex-col pt-7 pb-7 border-b-2 box-border '}>
      <h2 className={'text-xl font-semibold uppercase pb-[10]'}>{title}</h2>
      <div className={'flex flex-col gap-5'}>{children}</div>
    </section>
  );
};

export default Section;
