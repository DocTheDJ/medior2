import { ReactElement } from 'react';
import { User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { download } from '@/utils/download';
import { UserItem } from '../UserItem/UserItem';

export async function UserList(): Promise<ReactElement> {
  const users = await download<Array<User>>(publicRuntimeConfig.usersUrl, []);
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xxl font-bold mb-8 ml-4 text-gray-800">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-items-center">
        {
          users.map((val: User, index: number) => <UserItem key={`user_${index}`} user={val} />)
        }
      </div>
    </div>
  );
}
