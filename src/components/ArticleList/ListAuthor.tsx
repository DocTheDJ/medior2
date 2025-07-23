'use client';

import { ReactElement } from 'react';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';
import style from './ListAthor.module.css';

// this is the line that says the author at the top of the articles
// it is 'use client' due to the fact that the context is needed
export function ListAuthor({ user, id }: { user?: User, id: string }): ReactElement {
  const { value } = useUser();
  return (
    <div className={style.wrapper}>
      <p className={style.prefix}>Author</p>
      <span className={style.name}>{user?.name || value?.[0]?.get(Number(id))?.name}</span>
    </div>
  );
}
