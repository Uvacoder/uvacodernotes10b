import React from 'react';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title='About'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '17px',
          padding: '15px',
        }}
      >
        <p>
          <h2>About</h2>
          <p>
            These are companion notes to my{' '}
            <a href='https://github.com/rsapkf/config/'>dotfiles</a> and{' '}
            <a href='https://github.com/rsapkf/42/'>links</a> where I keep short
            snippets of code, shell scripts, tricks and tips to remember stuff.
          </p>
          <p>
            This site was created using{' '}
            <a href='https://docusaurus.io/'>Docusaurus</a>. Search powered by{' '}
            <a href='https://github.com/algolia/docsearch/'>
              Algolia DocSearch
            </a>
            .
          </p>
        </p>
      </div>
    </Layout>
  );
}

export default About;
