'use client';

import { ReactElement } from 'react';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';

export function ListAuthor({ user }: { user?: User }): ReactElement {
  const { value } = useUser();
  return (
    <div className="flex flex-row gap-12 items-center">
      <p className="text-gray text-sm mb-0 opacity-60">Author</p>
      <span className="font-semibold opacity-60">{user?.name || value?.[0]?.name}</span>
    </div>
  );
}
