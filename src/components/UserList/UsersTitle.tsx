'use client';
import { ReactElement, useEffect } from 'react';
import { User } from '@/shared/types';
import { useUser } from '@/shared/UserContext';

export function UsersTitle({ users }: { users: Array<User> }): ReactElement {
  const { value } = useUser();

  useEffect(() => {
    value?.[1].call({}, new Map(users.map((v: User) => [v.id, v])));
  }, [users]);
  return (
    <h1 className="text-[2.25rem] font-bold mb-8 ml-4 text-gray">Users</h1>
  );
}
