import {
  FaApple,
  FaBandcamp,
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import styles from './SocialLinks.module.scss';

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.instagram} />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className={styles.facebook} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className={styles.twitter} />
      </a>
      <a
        href="https://www.soundcloud.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSoundcloud className={styles.soundcloud} />
      </a>
      <a
        href="https://www.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify className={styles.spotify} />
      </a>
      <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
        <FaApple className={styles.apple} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className={styles.youtube} />
      </a>
      <a
        href="https://www.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaBandcamp className={styles.bandcamp} />
      </a>
    </div>
  );
};
