import React from 'react';
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

const socialMediaLinks = [
  {
    href: 'https://www.instagram.com',
    icon: FaInstagram,
    className: styles.instagram,
  },
  {
    href: 'https://www.facebook.com',
    icon: FaFacebook,
    className: styles.facebook,
  },
  {
    href: 'https://www.twitter.com',
    icon: FaTwitter,
    className: styles.twitter,
  },
  {
    href: 'https://www.soundcloud.com',
    icon: FaSoundcloud,
    className: styles.soundcloud,
  },
  {
    href: 'https://www.spotify.com',
    icon: FaSpotify,
    className: styles.spotify,
  },
  {
    href: 'https://www.apple.com',
    icon: FaApple,
    className: styles.apple,
  },
  {
    href: 'https://www.youtube.com',
    icon: FaYoutube,
    className: styles.youtube,
  },
  {
    href: 'https://www.bandcamp.com',
    icon: FaBandcamp,
    className: styles.bandcamp,
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaContainer}>
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <link.icon className={link.className} />
        </a>
      ))}
    </div>
  );
};
