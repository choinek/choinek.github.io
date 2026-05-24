import React, {type ReactNode} from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Admonition from '@theme/Admonition';

export default function BlogListPageWrapper(props): ReactNode {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  return (
    <>
      {currentLocale === 'en' && (
        <div className="container margin-vert--md">
          <Admonition type="info" title="Content available only in Polish">
            <p>
              Blog posts on this site are written in Polish. English pages list
              the posts but link you to the Polish versions for the full content.
            </p>
          </Admonition>
        </div>
      )}
      <BlogListPage {...props} />
    </>
  );
}
