import { ReactElement } from 'react';
import { headers } from 'next/headers';
import { Article, User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { interpolateUrl } from '@/utils/replacement';
import { ListAuthor } from './ListAuthor';

function ArticleCard({ article }: { article: Article }): ReactElement {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 w-full max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 rounded-xl shadow-gray-light-1">
      <h2 className="text-xl font-bold text-black mb-3 mt-0">{article.title}</h2>
      <p className="text-gray text-xs leading-relaxed whitespace-pre-line">{article.body}</p>
    </div>
  );
}

export async function ArticleList({ user }: { user: string }): Promise<ReactElement> {
  const headersList = await headers();
  const referer = headersList.get('referer');
  let userData;
  if (!referer) {
    const data = await fetch(interpolateUrl(publicRuntimeConfig.userUrl, { useId: user }));
    userData = (await data.json()) as User;
  }
  const data = await fetch(interpolateUrl(publicRuntimeConfig.articlesUrl, { useId: user }));
  const articles: Array<Article> = await data.json();

  return (
    <div className="min-h-screen p-8 font-sans">
      <h1 className="text-xxl font-bold text-gray mb-2">Articles</h1>
      <ListAuthor user={userData}/>
      <div className="h-3"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
