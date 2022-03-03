import { NextPage } from 'next';
import styles from '../styles/index.module.scss';

const contributions = [
  {
    logo: 'images/kms_logo.svg',
    alt: 'KMS Technology',
    url: 'https://kms-technology.com',
  },
  {
    logo: 'images/wingman_logo.svg',
    alt: 'Wingman',
    url: 'https://wingman.xyz',
  },
  {
    logo: 'images/cloudfx_logo.png',
    alt: 'CloudFX',
    url: 'https://cloudfx.com/',
  },
  {
    logo: 'images/flood_logo.svg',
    alt: 'FloodIO',
    url: 'https://flood.io',
  },
  {
    logo: 'images/drobebox_logo.png',
    alt: 'Drobebox',
    url: 'https://drobebox.com',
  },
];

const socials = [
  {
    icon: 'icon icon-facebook',
    url: 'tikivn://hello',
  },
  {
    icon: 'icon icon-linkedin',
    url: 'https://www.linkedin.com/in/hoang-trinh-071510157/',
  },
  {
    icon: 'icon icon-github',
    url: 'https://github.com/EUGinsane',
  },
  {
    icon: 'icon icon-twitter',
    url: 'https://twitter.com/hoangtrinhit',
  },
];

const IndexPage: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <img
          className={styles.avatar}
          src="images/avatar.png"
          alt="Profile Avatar"
        />
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
            and building things. My vision is to make our world a better place
            to live, to love. A place that we are all connected together.{' '}
            <b>#all-lives-matter</b>
          </p>
          <div className={styles.contributions}>
            <p className={styles.label}>My Contributions</p>
            {contributions.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <img className={styles.logo} src={item.logo} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.break}>Let's keep in touch</p>
      <div className={styles.socials}>
        {socials.map((item) => (
          <a key={item.icon} href={item.url} target="_blank" rel="noreferrer">
            <i className={item.icon} />
          </a>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;
