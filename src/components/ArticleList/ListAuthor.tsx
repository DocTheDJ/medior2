'use client';

import { ReactElement } from 'react';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';

export function ListAuthor({ user }: { user?: User }): ReactElement {
  const { value } = useUser();
  return (
    <p className="text-gray-600 text-lg mb-8 ml-4">Author <span className="font-semibold">{user?.name || value?.[0]?.name}</span></p>
  );
}
