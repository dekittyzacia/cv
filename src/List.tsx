import classNames from 'classnames';
import React from 'react';

interface ListElementProps {
  title?: string;
  description?: string;
  extra?: {
    name: string;
    value: string;
  }[];
}

export const ListElement: React.FC<ListElementProps> = ({
  title,
  description,
  extra,
}) => {
  return (
    <li>
      <p className={'italic'}>{title}</p>
      <p
        className={classNames('pl-5', {
          'pb-2': !!extra,
        })}
      >
        {description}
      </p>
      {extra?.map((it) => (
        <p key={it.name} className={'pl-5 pb-1'}>
          <span className={'italic'}>{it.name}</span>: {it.value}
        </p>
      ))}
    </li>
  );
};

interface ListProps {
  items: ListElementProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className={'list-disc flex flex-col gap-[10] pl-5'}>
      {items.map(({ title, description, extra }) => (
        <ListElement
          key={title}
          title={title}
          description={description}
          extra={extra}
        />
      ))}
    </ul>
  );
};

export default List;
