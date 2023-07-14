export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page for {music artist}',
};

export default async function Contact() {
  return <div>Contact Page</div>;
}
