import React from 'react';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title='About'>
      <div
        className='container'
        style={{
          display: 'flex',
          flex: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '17px',
          padding: '15px',
        }}
      >
        <div>
          <h2>About</h2>
          <p>
            These are companion notes to my{' '}
            <a href='https://github.com/rsapkf/config/'>dotfiles</a> and{' '}
            <a href='https://github.com/rsapkf/42/'>links</a> where I keep short
            snippets of code, shell scripts, tricks and tips related to common
            Linux utilities/concepts, mathematical topics, Martin Gardner's
            mathemagic tricks, poems that I like, notes from books I've read,
            etc.
          </p>
          <p>
            These are my personal, not so carefully formatted documents that I'm
            gradually transferring to{' '}
            <a href='https://github.com/rsapkf/73/'>a public repository</a>. If
            you spot any errors, please submit an issue or a pull request with a
            fix or additional information that you think is missing.
          </p>
          <p>
            This site was created using{' '}
            <a href='https://docusaurus.io/'>Docusaurus</a>. Search powered by{' '}
            <a href='https://github.com/algolia/docsearch/'>
              Algolia DocSearch
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
