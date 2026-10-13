import classNames from 'classnames';
import React from 'react';

interface ExpirienceElementProps {
  title?: string;
  children: React.ReactNode;
  inline?: boolean;
}

const ExperienceElement: React.FC<ExpirienceElementProps> = ({
  title,
  children,
  inline = false,
}) => {
  return (
    <div
      className={classNames({
        'flex flex-col gap-2': typeof children !== 'string',
        'sm:flex shrink-0': typeof children === 'string',
      })}
    >
      {typeof children === 'string' ? (
        `${title}: ${children.toString()}`
      ) : (
        <>
          <p className={'italic underline'}>{title}</p>
          {children}
        </>
      )}
    </div>
  );
};

export default ExperienceElement;
