'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';

// the button that shows in the user item to get to their articles page
// it is 'use client' because i needed a way to get the data from the server to the client
// so they are updated in the context when somebody clicks one of these
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
