import React, {type ReactNode} from 'react';
import Layout from '@theme-original/Navbar/MobileSidebar/Layout';
import type LayoutType from '@theme/Navbar/MobileSidebar/Layout';
import type {WrapperProps} from '@docusaurus/types';
import PageMessageInline from '@site/src/components/PageMessage/PageMessageInline';
import {usePageMessageContext} from '@site/src/components/PageMessage/PageMessageContext';

type Props = WrapperProps<typeof LayoutType>;

export default function NavbarMobileSidebarLayoutWrapper(props: Props): ReactNode {
  const {message, mobileExpanded} = usePageMessageContext();

  return (
    <Layout
      {...props}
      primaryMenu={
        <>
          {message && mobileExpanded && <PageMessageInline />}
          {props.primaryMenu}
        </>
      }
    />
  );
}
