import classNames from 'classnames';
import React from 'react';
import { ru } from './content/ru.js';

const Header: React.FC = () => (
  <header
    className={classNames(
      'flex flex-col gap-4',
      'sm:flex-row sm:justify-between sm:gap-0',
      'border-b-2 box-border pb-7',
    )}
  >
    <div className={'flex-col'}>
      <h1 className={'text-3xl font-semibold uppercase'}>{ru.personal.name}</h1>
      <p className={'italic'}>{ru.personal.job}</p>
    </div>
    <div className={'flex-col self-end'}>
      <p>{ru.personal.phone}</p>
      <p>{ru.personal.email}</p>
      <p>{ru.personal.tg}</p>
    </div>
  </header>
);

export default Header;
