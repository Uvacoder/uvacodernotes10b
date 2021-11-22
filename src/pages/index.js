import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="@rsapkf\'s notes.">
      <main style={{ marginTop: '6rem', marginBottom: '1rem' }}>
        <div className='container col'>
          <a
            href='https://www.youtube.com/watch?v=yGzCAV3S1Vc'
            target='_blank'
            rel='noreferrer noopener'
          >
            <p className='hero__subtitle'>{siteConfig.tagline}</p>{' '}
          </a>
          <Link to='/docs/linux/linux'>
            <img
              className={styles.featureImage}
              src='img/undraw_taking_notes.svg'
              alt='Taking notes'
            />
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
