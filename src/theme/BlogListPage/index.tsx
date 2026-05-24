import React, {type ReactNode} from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePageMessage} from '@site/src/components/PageMessage/usePageMessage';

const BLOG_LIST_MESSAGE = {
  title: 'Content available only in Polish',
  body: (
    <p>
      Blog posts on this site are written in Polish. English pages list the
      posts but link you to the Polish versions for the full content.
    </p>
  ),
};

export default function BlogListPageWrapper(props): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  usePageMessage({
    enabled: currentLocale === 'en',
    ...BLOG_LIST_MESSAGE,
  });

  return <BlogListPage {...props} />;
}
