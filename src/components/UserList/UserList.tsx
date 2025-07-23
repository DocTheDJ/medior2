import { ReactElement } from 'react';
import { User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { download } from '@/utils/download';
import { UsersTitle } from './UsersTitle';
import { UserItem } from '../UserItem/UserItem';
import style from './UserList.module.css';

// user list component that is async to satisfy loading data on the server
export async function UserList(): Promise<ReactElement> {
  // donaload data using unified function
  const users = await download<Array<User>>(publicRuntimeConfig.usersUrl, []);
  return (
    // put blocks in the column
    <div className={style.page}>
      {/* <h1 className={style.title}>Users</h1> */}
      <UsersTitle users={users}/>
      {/**
       * defined grid for the user items, and map them from the loaded list
       */}
      <div className={style.list}>
        {
          users.map((val: User, index: number) => <UserItem key={`user_${index}`} user={val} />)
        }
      </div>
    </div>
  );
}
