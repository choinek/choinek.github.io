import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {

  if (props.content != null) {
    const {frontMatter} = props.content;

    const authors = (frontMatter as any).authors as {
      name: string;
      picture: string;
    }[];

    return (
      <>
        <div style={{marginTop: 20, marginBottom: 20}}>
          Authors:
          <ul>
            {authors.map((author, i) => (
              <li key={i} style={{display: "flex",flexDirection: "row", alignItems: "center", padding: 5}}>
                <img
                  src={author.picture}
                  style={{ width: 40, height: 40, borderRadius: 40,  marginRight: 10}}
                />
                <span>{author.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <Footer {...props} />
      </>
    );
  }

  console.log(props);

  return <Footer {...props} />;
}
