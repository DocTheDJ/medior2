import { ReactElement } from 'react';
import { ArticleList } from '@/components/ArticleList/ArticleList';

async function Page({ params }: {
  params: Promise<{ user: string }>
}): Promise<ReactElement> {
  const { user } = await params;
  return (<ArticleList user={user} />);
}

export default Page;
