'use client';
// client needs to be used due to the links

import { ReactElement } from 'react';
import Markdown from 'markdown-to-jsx';

// markdown text from the task assignment
const markdownData = `
## How to use this application

You see navigation on this page. You can use it to navigate to other pages. Other pages are [Article list](./articles/1) only. You can use it to see articles of any user.

We are using best map web application in the world. You can see it on [Mapy.cz](https://mapy.cz). You can use it to see where is user from.

This page is build with [Next.js](https://nextjs.org/), [React](https://react.dev/) and [Typescript](https://www.typescriptlang.org/). You can use it to build your own application too.

`;

// interface to make link replacement constant easier
interface ICustomLink {
  children: ReactElement;
  href: string
  [key: string]: unknown;
}

// custom link replacement
const CustomLink = ({ children, ...props }: ICustomLink): ReactElement => {
  // function to be called when the link is clicked
  const handleClick = (): boolean => {
    window.location.href = props.href;
    return true;
  };

  return (
    <span
      {...props}
      role={'link'}
      tabIndex={0}
      style={{ color: 'darkgreen', cursor: 'pointer', fontWeight: 'bold' }}
      onClick={handleClick}
      onKeyDown={(e): boolean => e.key === 'Enter' && handleClick()}
    >
      {children}
    </span>
  );
};

export function MainText(): ReactElement {
  // as per markdown-to-jsx documentation, override the 'a' to 'span'
  return (
    <Markdown
      options={{
        overrides: {
          a: {
            component: CustomLink,
          },
        },
      }}
    >
      {markdownData}
    </Markdown>
  );
}
