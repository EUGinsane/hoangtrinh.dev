import { NextPage } from 'next';
import styles from '../styles/index.module.scss';

const contributions = [
  {
    logo: '/kms_logo.svg',
    alt: 'KMS Technology',
    url: 'https://kms-technology.com',
  },
  {
    logo: '/wingman_logo.svg',
    alt: 'Wingman',
    url: 'https://wingman.xyz',
  },
  {
    logo: '/cloudfx_logo.png',
    alt: 'CloudFX',
    url: 'https://cloudfx.com/',
  },
  {
    logo: '/flood_logo.svg',
    alt: 'FloodIO',
    url: 'https://flood.io',
  },
  {
    logo: '/drobebox_logo.png',
    alt: 'Drobebox',
    url: 'https://drobebox.com',
  },
];

const IndexPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <img className={styles.avatar} src="/avatar.png" alt="Profile Avatar" />
      <div className={styles.content}>
        <h1>
          Hi there{' '}
          <span role="img" aria-label="waving">
            👋
          </span>
          , it's nice to have a visitor!
        </h1>
        <p>
          I'm <b>Hoàng</b>, a pretty friendly developer, software engineer,
          problem solver who has a big passion in solving real-world problems
          and building things. My vision is to make our world a better place to
          live, to love. A place that we are all connected together.{' '}
          <b>#all-lives-matter</b>
        </p>
        <div className={styles.contributions}>
          {contributions.map((item) => (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
              <img className={styles.logo} src={item.logo} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
