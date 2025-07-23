import { ReactElement } from 'react';
import { Geo, User } from '@/shared/types';
import { ReadArticleButton } from '../UI/ButtonForArticle';
import { UserInfoItem } from './UserInfoItem/UserInfoItem';
import style from './UserItem.module.css';

// helper function to retrun modified string with geo location on the map
// could use some different height on the map
function getMapsPath(geo?: Geo): string {
  return `https://mapy.cz/turisticka?source=coor&id=${geo?.lng}%2C${geo?.lat}&x=${geo?.lng}&y=${geo?.lat}&z=16`;
}

export function UserItem(props: { user: User }): ReactElement {
  const { user } = props;

  return (
    <div className={style.card}>
      <h2 className={style.title}>{user.name}</h2>

      <div className={style.contentGrow}>
        <div className={style.block}>
          <UserInfoItem label="Username" value={user.username} />
          <UserInfoItem label="Email" value={user.email} />
          <UserInfoItem label="Phone" value={user.phone} />
          <UserInfoItem label="Website" value={user.website} />
        </div>

        <div className={style.block}>
          <div className={style.blockHead}>
            <h3 className={style.blockName}>Address</h3>
            <a href={getMapsPath(user.address?.geo)} className={style.link}>Show on map</a>
          </div>
          <UserInfoItem label="Street" value={user.address?.street} />
          <UserInfoItem label="Suite" value={user.address?.suite} />
          <UserInfoItem label="City" value={user.address?.city} />
          <UserInfoItem label="Zipcode" value={user.address?.zipcode} />
        </div>

        <div className={style.block}>
          <h3 className={style.blockName}>Company</h3>
          <UserInfoItem label="Name" value={user.company?.name} />
          <UserInfoItem label="Catch phrase" value={user.company?.catchPhrase} />
          <UserInfoItem label="Bs" value={user.company?.bs} />
        </div>
      </div>

      <ReadArticleButton user={user} />
    </div>
  );
}
