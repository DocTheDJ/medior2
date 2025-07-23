import { ReactElement } from 'react';
import { headers } from 'next/headers';
import { Article, User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { download } from '@/utils/download';
import { interpolateUrl } from '@/utils/replacement';
import { ListAuthor } from './ListAuthor';
import { ArticleCard } from '../ArticleItem/ArticleItem';
import style from './ArticleList.module.css';

// article list function component
export async function ArticleList({ user }: { user: string }): Promise<ReactElement> {
  // need to get headers to find out how the user got to the page where this component is used
  const headersList = await headers();
  const referer = headersList.get('referer');
  let userData;
  // is the referer is null it means that the page was loaded from anywhere
  // and not from the root site by clicking on a button
  if (!referer) {
    // therefore the user data must be downloaded
    userData = await download<User | undefined>(
      interpolateUrl(publicRuntimeConfig.userUrl, { useId: user }),
      undefined);
  }
  // download user articles
  const articles = await download<Array<Article>>(
    interpolateUrl(publicRuntimeConfig.articlesUrl, { useId: user }),
    []);
  // would be more efficient to prepare an endpoint in the api
  // that will return the user and their articles

  return (
    <div className={style.page}>
      <h1 className={style.title}>Articles</h1>
      <ListAuthor user={userData} id={user} />
      <div className="h-3"></div>

      <div className={style.list}>
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
