import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <></>,
    imageUrl: '',
    description: (
      <>
        <p>
          These are companion notes to my [
          <a href='https://github.com/rsapkf/config/'>dotfiles</a>] and [
          <a href='https://github.com/rsapkf/42/'>links</a>] where I keep short
          snippets of code, shell scripts, tricks and tips to remember stuff.
        </p>
      </>
    ),
  },
  {
    title: <></>,
    imageUrl: 'img/undraw_taking_notes.svg',
    description: <></>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col', styles.feature)}>
      {imgUrl && (
        <div className='text--center'>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="@rsapkf\'s notes.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <a
            href='https://www.youtube.com/watch?v=yGzCAV3S1Vc'
            style={{ color: '#222321' }}
            target='_blank'
            rel='noreferrer noopener'
          >
            <p className='hero__subtitle'>{siteConfig.tagline}</p>{' '}
          </a>

          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              View notes
            </Link>
            &nbsp;&nbsp;
            <a
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              href='https://github.com/rsapkf/73/'
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className='container'>
              <div className='row'>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
