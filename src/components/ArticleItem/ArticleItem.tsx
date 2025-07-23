import { ReactElement } from 'react';
import { Article } from '@/shared/types';
import style from './ArticleItem.module.css';

// simple article card
export function ArticleCard({ article }: { article: Article }): ReactElement {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{article.title}</h2>
      <p className={style.body}>{article.body}</p>
    </div>
  );
}
