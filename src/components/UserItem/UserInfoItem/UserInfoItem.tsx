import { ReactElement, ReactNode } from 'react';
import style from './UserInfoItem.module.css';

// a helper component that defines the key value pair in the user card
export function UserInfoItem({ label, value }: { label: string, value: ReactNode }): ReactElement {
  return (
    <div className={style.wrapper}>
      <p className={style.label}>{label}</p>
      <p className={style.value}>{value}</p>
    </div>
  );
}
