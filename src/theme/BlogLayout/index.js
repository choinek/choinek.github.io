import React from 'react';
import BlogLayout from '@theme-original/BlogLayout';
import ToggleFullWidthButton from '@site/src/components/layout/ToggleFullWidthButton';

export default function BlogLayoutWrapper(props) {
  return (
    <BlogLayout {...props}>
      <ToggleFullWidthButton />
      {props.children}
    </BlogLayout>
  );
}
