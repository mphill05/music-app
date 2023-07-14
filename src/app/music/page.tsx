export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Music from {music artist}',
};

export default async function Music() {
  return <div>Music Page</div>;
}
