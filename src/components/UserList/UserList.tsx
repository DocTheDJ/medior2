import { ReactElement } from 'react';
import { User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { UserItem } from '../UserItem/UserItem';
import style from './UserList.module.css';

export async function UserList(): Promise<ReactElement> {
  const data = await fetch(publicRuntimeConfig.usersUrl);
  const users: Array<User> = await data.json();
  return (
    <div className={style.base}>
      <h1 className={style.title + ' text-gray-800'}>Users</h1>
      <div className={style.list}>
        {
          users.map((val: User, index: number) => <UserItem key={`user_${index}`} user={val} />)
        }
      </div>
    </div>
  );
}
