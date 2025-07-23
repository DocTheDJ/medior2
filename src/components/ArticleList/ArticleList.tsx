import { ReactElement } from 'react';
import { headers } from 'next/headers';
import { Article, User } from '@/shared/types';
import publicRuntimeConfig from '@/utils/config';
import { interpolateUrl } from '@/utils/replacement';
import { ListAuthor } from './ListAuthor';

function ArticleCard({ article }: { article: Article }): ReactElement {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{article.body}</p>
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
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 ml-4">Articles</h1>
      <ListAuthor user={userData}/>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
