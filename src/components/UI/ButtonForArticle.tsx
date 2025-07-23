'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';

export function ReadArticleButton({ user }: { user: User }): ReactElement {
  const router = useRouter();
  const { value } = useUser();

  return (
    <button className="w-full text-blue py-2 px-4 rounded-md transition duration-300 ease-in-out border border-blue hover:text-white hover:bg-blue"
      onClick={(): void => {
        value?.[1].call({}, user);
        router.push(`articles/${user.id}`);
      }}
    >
      Read articles
    </button>
  );
}
